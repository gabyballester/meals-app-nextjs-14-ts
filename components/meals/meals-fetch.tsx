import { MealsGrid } from "@/components/meals";
import { getMeals } from "@/lib/meals";
import { MealType } from "@/types";

export const MealsFetch = async () => {
  const meals: MealType[] = await getMeals();
  return <MealsGrid meals={meals} />;
};
