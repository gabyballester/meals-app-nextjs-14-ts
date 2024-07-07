import { MealType } from "@/types";
import { MealItem } from "./meal-item";
import classes from "./meals-grid.module.css";

interface Props {
  meals: MealType[];
}

export const MealsGrid = ({ meals }: Props) => { 
  return (
    <ul className={classes.meals}>
      {meals.map((meal: any) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};
