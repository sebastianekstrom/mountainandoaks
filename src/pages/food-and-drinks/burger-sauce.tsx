import React from "react";

import metaImage from "public/images/recipes/burger-sauce/thumbnails/meta.png";
import heroImage from "public/images/recipes/burger-sauce/thumbnails/tall.jpg";

import { Badge } from "components/Badge/Badge";
import { Ingredients } from "components/Ingredients/Ingredients";
import { Method } from "components/Method/Method";
import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";
import { Text } from "components/Text/Text";

const INGREDIENTS = [
	{
		value: 44,
		label: "Mayonnaise",
	},
	{
		value: 21,
		label: "Ketchup",
	},
	{
		value: 12.5,
		label: "Pickles",
	},
	{
		value: 5,
		label: "Sriracha (optional)",
	},
	{
		value: 5,
		label: "White onion",
	},
	{
		value: 5,
		label: "Yellow mustard (American)",
	},
	{
		value: 0.5,
		label: "Garlic powder",
	},
	{
		value: 0,
		label: "Salt & Pepper",
		valueSuffix: false,
		excludeValue: true,
	},
];

const STEPS = [
	<Text>
		Finely chop <b>onion</b> and <b>pickles</b>, then place in a mixing
		container
	</Text>,
	<Text>
		Incorporate the <b>remaining ingredients</b> and stir to combine. For a
		milder sauce, reduce the amount of sriracha or omit it altogether
	</Text>,
	<Text>
		Season with <b>salt</b> and <b>pepper</b> to taste, adjusting as needed
	</Text>,
	<Text>
		Use immediately or refrigerate for a few hours to enhance the flavors
	</Text>,
];

export default function BurgerSauce() {
	return (
		<Page
			metaTitle="The Burger Sauce"
			description="A delicious mix of creamy mayo, spicy sriracha, tangy garlic pickles, and bold American mustard. This easy-to-make condiment takes your burgers to a whole new level of irresistible flavor!"
			image={metaImage}
		>
			<Post
				title="The Burger Sauce"
				heroImage={heroImage}
				ingredients={
					<Ingredients
						ingredientSuffix="burgers"
						ingredients={INGREDIENTS}
						additionalMeta={<Badge value="15min" label="Prep time" />}
						startingMultiplier={2}
					/>
				}
				method={<Method recipeMethod={STEPS} />}
				description={
					<>
						<Text variant="ingress">
							A delicious mix of creamy mayo, spicy sriracha, tangy garlic
							pickles, and bold American mustard. This easy-to-make condiment
							takes your burgers to a whole new level of irresistible flavor!
						</Text>
					</>
				}
			/>
		</Page>
	);
}
