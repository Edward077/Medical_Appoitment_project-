"use server";

import { prismaClient } from "@/lib/db";
import { SpecialtyProps } from "@/types/types";
import { revalidatePath } from "next/cache";

// Create Specialty
export async function createSpecialty(data: SpecialtyProps) {
  try {
    const existingSpecialty = await prismaClient.specialty.findUnique({
      where: {
        slug: data.slug,
      },
    });
    if (existingSpecialty) {
      return {
        data: null,
        status: 409,
        error: "Specialty already exists",
      };
    }
    const newSpecialty = await prismaClient.specialty.create({ data });
    revalidatePath("/dashboard/specialties");
    return {
      data: newSpecialty,
      status: 201,
      error: null,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      status: 500,
      error: "Specialty not created, something went wrong",
    };
  }
}

// Update Specialty
export async function updateSpecialty(id: string, data: SpecialtyProps) {
  try {
    const existingSpecialty = await prismaClient.specialty.findUnique({
      where: {
        id,
      },
    });
    if (!existingSpecialty) {
      return {
        data: null,
        status: 404,
        error: "Specialty does not exists",
      };
    }
    const updateSpecialty = await prismaClient.specialty.update({
      where: {
        id,
      },
      data,
    });
    revalidatePath("/dashboard/specialties");
    return {
      data: updateSpecialty,
      status: 201,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      status: 500,
      error: "Specialty not updated, something went wrong",
    };
  }
}

// Get Specialty by Slug
export async function getSpecialtyBySlug(slug: string | undefined) {
  if (slug) {
    try {
      const specialty = await prismaClient.specialty.findUnique({
        where: {
          slug,
        },
      });
      return {
        data: specialty,
        status: 200,
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        status: 500,
        error: "Specialty not fetched, something went wrong",
      };
    }
  }
}

// Create Multiple Specialties
export async function createMultipleSpecialties() {
  try {
    const specialties = [
      {
        title: "Surgeon",
        slug: "surgeon",
      },
      {
        title: "Physiotherapist",
        slug: "physiotherapist",
      },
      {
        title: "Gneral Medication",
        slug: "general-medication",
      },
      {
        title: "UTI Specialist",
        slug: "uti-specialist",
      },
      {
        title: "ED Specialist",
        slug: "ed-specialist",
      },
    ];

    for (const specialty of specialties) {
      try {
        await createSpecialty(specialty);
        console.log(`Specialty created: ${specialty["title"]}`);
      } catch (error) {
        console.log(`Error creating Specialty ${specialty.title}: `, error);
      }
    }
  } catch (error) {
    console.log(error);
    return {
      data: null,
      status: 500,
      error: "Specialties not created, something went wrong",
    };
  }
}

// Get Service
export async function getSpecialties() {
  try {
    const specialties = await prismaClient.specialty.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return {
      data: specialties,
      status: 200,
      error: null,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      status: 500,
      error: "Specialty not fetched, something went wrong",
    };
  }
}

// Create Specialty
export async function deleteSpecialty(id: string) {
  try {
    await prismaClient.specialty.delete({
      where: {
        id,
      },
    });
    revalidatePath("/dashboard/specialties");
    return {
      ok: true,
      status: 200,
      error: null,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      status: 500,
      error: "Specialty not deleted, something went wrong",
    };
  }
}
