"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./mealApi";
import { MealFormData } from "@/types";

const isValidString = (value: string): value is string => {
  return typeof value === "string" && value.trim().length > 0;
};

const isValidFile = (value: File): value is File => {
  return value instanceof File && value.size > 0;
};

const isValidEmail = (value: string): boolean => {
  return /\S+@\S+\.\S+/.test(value);
};

const validateMealForm = (mealForm: MealFormData): boolean => {
  return (
    isValidString(mealForm.title) &&
    isValidString(mealForm.summary) &&
    isValidString(mealForm.instructions) &&
    isValidFile(mealForm.image) &&
    isValidString(mealForm.creator) &&
    isValidEmail(mealForm.creator_email)
  );
};

export const shareMeal = async (formData: FormData) => {
  const mealForm: MealFormData = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as File,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  };

  if (!validateMealForm(mealForm)) {
    console.error("Validation failed, please check the form data.");
    throw new Error("Invalid input");
  }

  await saveMeal(mealForm);
  redirect("/meals");
};
