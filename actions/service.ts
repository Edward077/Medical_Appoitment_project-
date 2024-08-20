"use server";

import { prismaClient } from "@/lib/db";
import { ServicesProps } from "@/types/types";
import { revalidatePath } from "next/cache";

// Create Service
export async function createService(data: ServicesProps) {
  try {
    const existingService = await prismaClient.service.findUnique({
      where: {
        slug: data.slug,
      },
    });
    if (existingService) {
      return {
        data: null,
        status: 409,
        error: "Service already exists",
      };
    }
    const newService = await prismaClient.service.create({ data });
    revalidatePath("/dashboard/services");
    return {
      data: newService,
      status: 201,
      error: null,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      status: 500,
      error: "Service not created, something went wrong",
    };
  }
}

// Update Service
export async function updateService(id: string, data: ServicesProps) {
  try {
    const existingService = await prismaClient.service.findUnique({
      where: {
        id,
      },
    });
    if (!existingService) {
      return {
        data: null,
        status: 404,
        error: "Service does not exists",
      };
    }
    const updateService = await prismaClient.service.update({
      where: {
        id,
      },
      data,
    });
    revalidatePath("/dashboard/services");
    return {
      data: updateService,
      status: 201,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      status: 500,
      error: "Service not updated, something went wrong",
    };
  }
}

// Create Multiple Services
export async function createMultipleServices() {
  try {
    const services = [
      {
        title: "Tele-Heath",
        slug: "tele-heath",
        imageUrl:
          "https://utfs.io/f/7dbb9f86-371f-45b4-a824-08e0ba39c3d8-73jeog.png",
      },
      {
        title: "Video Prescription Refill",
        slug: "video-prescription-refill",
        imageUrl:
          "https://utfs.io/f/a33b2af6-f6bc-469f-acb7-d850382235ce-vd6r0p.png",
      },
      {
        title: "In-Person Doctor Visit",
        slug: "in-person-doctor-visit",
        imageUrl:
          "https://utfs.io/f/5730a417-bb4e-4b24-91c5-08a1e2dc2475-d36u4b.png",
      },
      {
        title: "UTI Consult",
        slug: "uti-consult",
        imageUrl:
          "https://utfs.io/f/cf11d977-ec10-413f-94e0-ff4f54ff9707-1tsgvn.png",
      },
      {
        title: "ED Consult",
        slug: "ed-consult",
        imageUrl:
          "https://utfs.io/f/378023d5-7582-4a0a-a7fe-7e141720b3fc-vvpbxm.png",
      },
      {
        title: "Mental Health Consult",
        slug: "mental-health-consult",
        imageUrl:
          "https://utfs.io/f/090503e2-03e7-40a5-bfbb-98c2934fd527-jpgalc.png",
      },
    ];

    for (const service of services) {
      try {
        await createService(service);
      } catch (error) {
        console.log(`Error creating service ${service.title}: `, error);
      }
    }
  } catch (error) {
    return {
      data: null,
      status: 500,
      error: "Services not created, something went wrong",
    };
  }
}

// Get Services
export async function getServices() {
  try {
    const services = await prismaClient.service.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return {
      data: services,
      status: 200,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      status: 500,
      error: "Service not fetched, something went wrong",
    };
  }
}

// Get Service by Slug
export async function getServiceBySlug(slug: string | undefined) {
  if (slug) {
    try {
      const service = await prismaClient.service.findUnique({
        where: {
          slug,
        },
      });
      return {
        data: service,
        status: 200,
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        status: 500,
        error: "Service not fetched, something went wrong",
      };
    }
  }
}

// Create Service
export async function deleteService(id: string) {
  try {
    await prismaClient.service.delete({
      where: {
        id,
      },
    });
    revalidatePath("/dashboard/services");
    return {
      ok: true,
      status: 200,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      status: 500,
      error: "Service not deleted, something went wrong",
    };
  }
}

// Update Doctor service settings
export async function updateDoctorService(id: string | undefined, data: any) {
  if (id) {
    try {
      const updatedProfile = await prismaClient.doctorProfile.update({
        where: {
          id,
        },
        data,
      });
      // Assuming you have a function to revalidate the path
      revalidatePath("/dashboard/setting");
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
