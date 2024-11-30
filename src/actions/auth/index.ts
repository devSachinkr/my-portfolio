"use server";
import { v4 } from "uuid";
import { db } from "@/lib/db";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";

const generateResponse = (
  status: number,
  message: string,
  data?: {
    email: string;
    name: string;
    password: string;
    id: string;
    token: string;
  } | null
) => ({
  status,
  message,
  data: data || null,
});

export const signUp = async (email: string, name: string, password: string) => {
  try {
    await db.user.create({
      data: {
        id: v4(),
        email,
        password: await hash(password, 10),
        name,
        token: "",
      },
    });
    return generateResponse(200, "Sign up successful");
  } catch (error) {
    console.log("SignUp Error:", error);
    return generateResponse(500, "Server Error");
  }
};

export const signIn = async ({
  email,
  password,
  userOtp,
}: {
  email: string;
  password: string;
  userOtp: string;
}) => {
  try {
    if (!email || !password || !userOtp) {
      return generateResponse(400, "All fields are required");
    }

    const existingUser = await db.user.findUnique({ where: { email } });
    if (!existingUser) {
      return generateResponse(400, "Only Admins can sign in");
    }

    const isPasswordValid = await compare(password, existingUser.password);
    if (!isPasswordValid) {
      return generateResponse(400, "Invalid Input Credentials");
    }

    // Generate JWT
    const token = jwt.sign({ id: existingUser.id }, process.env.JWT_SECRET!, {
      expiresIn: process.env.JWT_EXPIRE_IN,
    });

    // Update token in database
    await db.user.update({
      where: { id: existingUser.id },
      data: { token },
    });

    // Validate OTP
    const otpRecord = await db.otp.findUnique({ where: { otp: userOtp } });
    if (!otpRecord) {
      return generateResponse(400, "Invalid OTP");
    }

    // Delete OTP after successful login
    await deleteOtp(email);
    return generateResponse(200, "Welcome Boss", existingUser);
  } catch (error) {
    console.error("SignIn Error:", error);
    return generateResponse(500, "Server Down");
  }
};

export const deleteOtp = async (email: string) => {
  if (!email) return generateResponse(400, "Email must be provided");

  try {
    await db.otp.delete({ where: { email } });
    return generateResponse(200, "OTP deleted successfully");
  } catch (error) {
    console.error("deleteOtp Error:", error);
    return generateResponse(500, "Failed to delete OTP");
  }
};

export const insertOtpInDb = async (otp: string, email: string) => {
  if (!email) return generateResponse(400, "Email must be provided");
  if (!otp) return generateResponse(400, "OTP is required");

  try {
    const isOtpExist = await isOTPExist(email);
    if (isOtpExist.status === 400)
      return generateResponse(400, "OTP already exists");

    await db.otp.create({
      data: {
        id: v4(),
        otp,
        email,
      },
    });
    return generateResponse(200, "OTP inserted successfully");
  } catch (error) {
    console.error("insertOtpInDb Error:", error);
    return generateResponse(500, "Failed to insert OTP");
  }
};

export const isOTPExist = async (email: string) => {
  if (!email) return generateResponse(400, "Email must be provided");

  const otpRecord = await db.otp.findUnique({ where: { email } });
  return otpRecord
    ? generateResponse(400, "OTP already sent")
    : generateResponse(200, "OTP does not exist");
};
