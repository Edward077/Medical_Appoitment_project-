"use server";

// import EmailTemplate from "@/components/Emails/emailTemplate";
import WelcomeEmail from "@/components/Emails/welcome-email";
import { prismaClient } from "@/lib/db";
import { Resend } from "resend";

// Create doctorprofile
export async function createDoctorProfile(formData: any) {
  const {
    firstName,
    lastName,
    middleName,
    dob,
    gender,
    profilePicture,
    bio,
    nationalId,
    passportNumber,
    passportExpiryDate,
    issuingAuthority,
    page,
    userId,
    trackingNumber,
  } = formData;

  try {
    const newProfile = await prismaClient.doctorProfile.create({
      data: {
        firstName,
        lastName,
        middleName,
        dob,
        gender,
        profilePicture,
        bio,
        nationalId,
        passportNumber,
        passportExpiryDate,
        issuingAuthority,
        page,
        userId,
        trackingNumber,
      },
    });

    return {
      data: newProfile,
      status: 201,
      error: null,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      status: 500,
      error: "Profile not created, something went wrong",
    };
  }
}

// Update Doctor id
export async function updateDoctorProfile(id: string | undefined, data: any) {
  if (id) {
    try {
      const updatedProfile = await prismaClient.doctorProfile.update({
        where: {
          id,
        },
        data,
      });
      return {
        data: updatedProfile,
        status: 201,
        error: null,
      };
    } catch (error) {
      console.log("Error updating user data: ", error);
      return {
        data: null,
        status: 500,
        error: `Error updating profile: ${error}`,
      };
    }
  }
}

// Track application by tracking Number
export async function getApplicationByTrackingNumber(trackingNumber: string) {
  if (trackingNumber) {
    try {
      const existingProfile = await prismaClient.doctorProfile.findUnique({
        where: {
          trackingNumber,
        },
      });
      if (!existingProfile) {
        return {
          data: null,
          status: 404,
          error: "No Profile associated with the provided Tracking Number",
        };
      }
      return {
        data: existingProfile,
        status: 200,
        error: null,
      };
    } catch (error) {
      console.log("Error fetching user", error);
      return {
        data: null,
        status: 500,
        error: "Error retrieving Tracking Number from Database",
      };
    }
  }
}

// Complete OnBoarding and Welcome email message
export async function completeProfile(id: string | undefined, data: any) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  if (id) {
    try {
      const existingProfile = await prismaClient.doctorProfile.findUnique({
        where: {
          id,
        },
      });
      if (!existingProfile) {
        return {
          data: null,
          status: 404,
          error: "No Profile Found",
        };
      }
      // === Send Email
      const email = existingProfile.email as string;
      const firstName = existingProfile.firstName as string;
      const previewText = "Welcome to CareConnect";
      const message =
        "Thank you for registering with CareConnect. We are happy to have you Join the Team for saving lives, that's our duty and our ethics in this profession. SAVE ONE LIFE, SAVE A FUTURE.";
      const sendMail = await resend.emails.send({
        // from: "Medical Appointment <onboarding@resend.dev>",
        from: "Medical Appointment <development@inexts.in>",
        to: email,
        subject: "Thanks for Joining CareConnect",
        react: WelcomeEmail({ firstName, previewText, message }),
      });
      const updatedProfile = await prismaClient.doctorProfile.update({
        where: {
          id,
        },
        data,
      });
      return {
        data: updatedProfile,
        status: 201,
        error: null,
      };
    } catch (error) {
      console.log("Error updating user data: ", error);
      return {
        data: null,
        status: 500,
        error: `Error updating profile: ${error}`,
      };
    }
  }
}

// Get Profile by Id
export async function getDoctorProfileById(userId: string | undefined) {
  if (userId) {
    try {
      const profile = await prismaClient.doctorProfile.findUnique({
        where: {
          userId,
        },
        include: {
          availability: true,
        },
      });
      console.log(profile);
      return {
        data: profile,
        status: 200,
        error: null,
      };
    } catch (error) {
      console.log("Error fetching profile: ", error);
      return {
        data: null,
        status: 500,
        error: `Error fetching profile: ${error}`,
      };
    }
  }
}

// Create new user
export async function createAvailability(data: any) {
  try {
    const newAvailability = await prismaClient.availability.create({ data });
    console.log(newAvailability);
    return newAvailability;
  } catch (error) {
    console.log(error);
    return {
      data: null,
      status: 500,
      error: "Availability not created, something went wrong",
    };
  }
}

// Update user id
export async function updateAvailability(id: string | undefined, data: any) {
  if (id) {
    try {
      const updatedAvailability = await prismaClient.availability.update({
        where: {
          id,
        },
        data,
      });
      return {
        data: updatedAvailability,
        status: 201,
        error: null,
      };
    } catch (error) {
      console.log("Error updating Availability data: ", error);
      return {
        data: null,
        status: 500,
        error: `Error updating Availability: ${error}`,
      };
    }
  }
}
