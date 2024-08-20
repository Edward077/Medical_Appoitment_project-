"use server";

import { prismaClient } from "@/lib/db";
import { SymptomsProps } from "@/types/types";
import { Symptom } from "@prisma/client";
import { revalidatePath } from "next/cache";

// Create Symptom
export async function createSymptom(data: SymptomsProps) {
  try {
    const existingSymptom = await prismaClient.symptom.findUnique({
      where: {
        slug: data.slug,
      },
    });
    if (existingSymptom) {
      return {
        data: null,
        status: 409,
        error: "Symptom already exists",
      };
    }
    const newSymptom = await prismaClient.symptom.create({ data });
    revalidatePath("/dashboard/symptoms");
    return {
      data: newSymptom,
      status: 201,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      status: 500,
      error: "Symptom not created, something went wrong",
    };
  }
}

// Update Symptom
export async function updateSymptom(id: string, data: SymptomsProps) {
  try {
    const existingSymptom = await prismaClient.symptom.findUnique({
      where: {
        id,
      },
    });
    if (!existingSymptom) {
      return {
        data: null,
        status: 404,
        error: "Symptom does not exists",
      };
    }
    const updateSymptom = await prismaClient.symptom.update({
      where: {
        id,
      },
      data,
    });
    revalidatePath("/dashboard/stmptoms");
    return {
      data: updateSymptom,
      status: 201,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      status: 500,
      error: "Symptom not updated, something went wrong",
    };
  }
}

// Get Symptom by Slug
export async function getSymptomBySlug(slug: string | undefined) {
  if (slug) {
    try {
      const symptom = await prismaClient.symptom.findUnique({
        where: {
          slug,
        },
      });
      return {
        data: symptom,
        status: 200,
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        status: 500,
        error: "Symptom not fetched, something went wrong",
      };
    }
  }
}

// Create Multiple Symptoms
export async function createMultipleSymptoms() {
  try {
    const symptoms = [
      {
        title: "Fever",
        slug: "fever",
      },
      {
        title: "Rash",
        slug: "rash",
      },
      {
        title: "Body Heat",
        slug: "body-heat",
      },
      {
        title: "Vomiting",
        slug: "vomiting",
      },
      {
        title: "Pain",
        slug: "pain",
      },
      {
        title: "Headache",
        slug: "headache",
      },
    ];

    for (const symptom of symptoms) {
      try {
        await createSymptom(symptom);
      } catch (error) {
        console.log(`Error creating Symptom ${symptom.title}: `, error);
      }
    }
  } catch (error) {
    console.log(error);
    return {
      data: null,
      status: 500,
      error: "Symptom not created, something went wrong",
    };
  }
}

// Get Symptoms
export async function getSymptoms() {
  try {
    const symptoms = await prismaClient.symptom.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return {
      data: symptoms,
      status: 200,
      error: null,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      status: 500,
      error: "Symptom not fetched, something went wrong",
    };
  }
}

// Create Symptom
export async function deleteSymptom(id: string) {
  try {
    await prismaClient.symptom.delete({
      where: {
        id,
      },
    });
    revalidatePath("/dashboard/symptoms");
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
      error: "Symptom not deleted, something went wrong",
    };
  }
}
