import { getMeals } from "@/lib/mealApi";
import { MealType } from "@/types";
import { MealsGrid } from "./meals-grid";

export const MealsFetch = async () => {
  const meals: MealType[] = await getMeals();
  return <MealsGrid meals={meals} />;
};
