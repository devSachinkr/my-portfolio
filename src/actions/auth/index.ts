"use server";
import { v4 } from "uuid";
import { db } from "@/lib/db";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (email: string, name: string, password: string) => {
  await db.user.create({
    data: {
      id: v4(),
      email,
      password: await hash(password, 10),
      name,
      token: "",
    },
  });
};

export const signIn = async ({
  email,
  name,
  password,
  userOtp,
}: {
  name: string;
  email: string;
  password: string;
  userOtp: string;
}) => {
  try {
    if (!email || !password || !name || !userOtp) {
      return { status: 400, message: "All Fields are required" };
    }

    const existingUser = await db.user.findUnique({
      where: { email },
    });
    if (!existingUser) {
      return { status: 400, message: "Only Admins can sign in" };
    }
    if (await compare(password, existingUser.password)) {
      const payload = {
        email: existingUser.email,
        id: existingUser.id,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET!, {
        expiresIn: process.env.JWT_EXPIRE_IN,
      });
      existingUser.token = token;
      await db.user.update({
        where: { id: existingUser.id },
        data: existingUser,
      });
    } else {
      return { status: 400, message: "Invalid Input Credentials" };
    }

    try {
      const res = await db.otp.findUnique({
        where: {
          otp: userOtp,
        },
      });

      if (!res) {
        return { status: 400, message: "Invalid Input Credentials" };
      }
    } catch (error) {
      console.log(error);
    }

    return { status: 200, data: existingUser, message: "Welcome Boss" };
  } catch (error) {
    console.log(error);
    return { status: 500, message: "Server Down" };
  }
};

export const insertOtpInDb = async (otp: string) => {
  try {
    if (!otp) return { status: 400, message: "OTP is required" };
    const res = await db.otp.create({
      data: {
        id: v4(),
        otp: otp,
        expiryDate: String(new Date().getTime() + 1000 * 60 * 60),
      },
    });
    if (!res)
      return { status: 400, message: "Failed to insert OTP in Database" };

    return { status: 200 };
  } catch (error) {
    console.log(error);
  }
};
