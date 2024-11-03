'use server';
import { insertOtpInDb } from "@/actions/auth";
import nodemailer from "nodemailer";
function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
export const sendMail = async () => {
  const otp = generateOtp();
  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const info = transport.sendMail({
      from: `This is from My Portfolio ${process.env.GMAIL_USER}`,
      to: process.env.GMAIL_TO,
      subject: "OTP Verification : ",
      text: `Your OTP is ${otp}`,
    });
    
    console.log("Message sent: %s", info);
    const res = await insertOtpInDb(otp);
    if (res?.status === 200) {
      console.log("OTP inserted successfully");
    }
  } catch (error) {
    console.log("Error while sending the OTP: " + error);
  }
};
