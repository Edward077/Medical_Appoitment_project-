"use server";

import bcrypt from "bcrypt";
import { Resend } from "resend";
import { prismaClient } from "@/lib/db";
import { RegisterInputProps } from "@/types/types";
import EmailTemplate from "@/components/Emails/emailTemplate";

// Create new user
export async function createUser(formData: RegisterInputProps) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { fullName, email, role, phone, password, plan } = formData;

  try {
    const existingUser = await prismaClient.user.findUnique({
      where: {
        email: email,
      },
    });
    if (existingUser) {
      return {
        data: null,
        error: `User with this email (${email}) already exists.`,
        status: 409,
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const generateToken = () => {
      const min = 100000;
      const max = 999999;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const userToken = generateToken();

    const newUser = await prismaClient.user.create({
      data: {
        name: fullName,
        email,
        phone,
        password: hashedPassword,
        role,
        plan,
        token: userToken,
      },
    });

    //Send Email with the Token on the link as a search param
    const token = newUser.token;
    const userId = newUser.id;
    const firstName = newUser.name.split(" ")[0];
    const linkText = "Verify your Account ";
    const message =
      "Thank you for registering with CareConnect. To complete your registration, verify your email address, please enter the following 6-digit verification code on our website :";
    const sendMail = await resend.emails.send({
      // from: "Medical Appointment <onboarding@resend.dev>",
      from: "Medical Appointment <development@inexts.in>",
      to: email,
      subject: "Verify Your Email Address",
      react: EmailTemplate({ firstName, token, linkText, message }),
    });

    return {
      data: newUser,
      error: null,
      status: 200,
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
}

// Get user by id
export async function getUserById(id: string) {
  if (id) {
    try {
      const user = await prismaClient.user.findUnique({
        where: {
          id,
        },
      });
      return user;
    } catch (error) {
      console.log("Error fetching user", error);
    }
  }
}

// Update user id
export async function updateUserById(id: string) {
  if (id) {
    try {
      const updatedUser = await prismaClient.user.update({
        where: {
          id,
        },
        data: {
          isVerfied: true,
        },
      });
      return updatedUser;
    } catch (error) {
      console.log("Error updating user data: ", error);
    }
  }
}
