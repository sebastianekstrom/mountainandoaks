import { MultiIngredient as _MultiIngredient } from "types/recipe";
import Text from "components/Text";
import Table from "components/Table";

interface Props {
  ingredients: _MultiIngredient[];
  multiplier: number;
}

export const MultiIngredient = ({ ingredients, multiplier }: Props) => {
  return (
    <>
      {ingredients.map((ingredient, index) => {
        return (
          <div key={index} className="mt-8">
            <div className="mb-2">
              <Text variant="h3">{ingredient.label}</Text>
            </div>
            <Table items={ingredient.ingredients} multiplier={multiplier} />
          </div>
        );
      })}
    </>
  );
};
