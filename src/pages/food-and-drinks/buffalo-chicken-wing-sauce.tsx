import React from "react";

import metaImage from "public/images/recipes/buffalo-chicken-wing-sauce/thumbnails/meta.png";
import heroImage from "public/images/recipes/buffalo-chicken-wing-sauce/thumbnails/tall.jpg";

import { Badge } from "components/Badge/Badge";
import { Ingredients } from "components/Ingredients/Ingredients";
import { Method } from "components/Method/Method";
import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";
import { Text } from "components/Text/Text";

const INGREDIENTS = [
	{
		value: 100,
		label: "Hot Pepper Sauce (such as Frank's)",
	},
	{
		value: 65,
		label: "Ketchup",
	},
	{
		value: 25,
		label: "Butter",
	},
	{
		value: 20,
		label: "Apple cider vinegar",
	},
	{
		value: 3,
		label: "Worcestershire sauce",
	},
	{
		value: 1,
		label: "Celery salt",
	},
	{
		value: 1,
		label: "Salt to taste",
		valueSuffix: false,
		excludeValue: true,
	},
];

const STEPS = [
	<Text>
		Combine <b>all the ingredients</b> in a saucepan.
	</Text>,
	<Text>
		Bring the <b>heat up to a simmer</b>. Allow it to cook for about 5-10
		minutes, infusing the flavors together.
	</Text>,
	<Text>
		Season to taste with <b>salt</b>.
	</Text>,
	<Text>
		Generously smother your crispy chicken wings with this tangy sauce, or use
		it as a finger-licking good dip. Enjoy the kick!
	</Text>,
];

export default function BuffaloChickenWing() {
	return (
		<Page
			metaTitle="Buffalo Chicken Wing Sauce"
			description="Get ready to rock your taste buds with this wickedly tasty sauce, perfect for taking your chicken wings to new heights. This easy, lip-smacking recipe delivers a flavor explosion with every bite."
			image={metaImage}
		>
			<Post
				title="Buffalo Chicken Wing Sauce"
				heroImage={heroImage}
				ingredients={
					<Ingredients
						ingredientSuffix="batch"
						ingredients={INGREDIENTS}
						additionalMeta={<Badge value="25min" label="Prep time" />}
					/>
				}
				method={<Method recipeMethod={STEPS} />}
				description={
					<>
						<Text variant="ingress">
							Get ready to rock your taste buds with this wickedly tasty sauce,
							perfect for taking your chicken wings to new heights.
						</Text>

						<Text variant="ingress">
							This easy, lip-smacking recipe delivers a flavor explosion with
							every bite.
						</Text>
					</>
				}
			/>
		</Page>
	);
}
