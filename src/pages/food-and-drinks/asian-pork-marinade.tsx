import React, { useState } from "react";

import metaImage from "public/images/recipes/asian-pork-marinade/thumbnails/meta.png";
import heroImage from "public/images/recipes/asian-pork-marinade/thumbnails/tall.png";

import { Badge } from "components/Badge/Badge";
import { Ingredients } from "components/Ingredients/Ingredients";
import { Method } from "components/Method/Method";
import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";
import { Text } from "components/Text/Text";

const INGREDIENTS = [
	{
		value: 40,
		label: "Fish sauce",
	},
	{
		value: 30,
		label: "Soy sauce",
	},
	{
		value: 25,
		label: "Maple syrup",
	},
	{
		value: 10,
		label: "Sriracha",
	},
	{
		value: 10,
		label: "Sweet soy sauce (kecap manis)",
	},
	{
		value: 5,
		label: "5 spice",
	},
	{
		value: 5,
		label: "Maggi",
	},
	{
		value: 1.5,
		label: "Sesame oil",
	},
	{
		value: 1.5,
		label: "Garlic powder",
	},
	{
		value: 1.5,
		label: "Onion powder",
	},
];

const STARTING_MULTIPLIER = 1;
const PORK_PER_BATCH = 600;
const STEPS = [
	<Text>
		In a mixing bowl, <b>whisk together all the ingredients</b> until well
		blended.
	</Text>,
	<Text>
		Place the pork in a <b>sealable plastic bag and pour the marinade</b> over
		it. Seal the bag, ensuring there's minimal air inside.
	</Text>,
	<Text>
		Gently <b>massage the bag</b> to ensure the marinade evenly coats all pieces
		of pork.
	</Text>,
	<Text>
		Refrigerate and let the pork <b>marinate for 1 to 24 hours</b>. For the best
		flavor, the longer, the better.
	</Text>,
];

export default function AsianPorkMarinade() {
	const [multiplier, setMultiplier] = useState(STARTING_MULTIPLIER);
	return (
		<Page
			metaTitle="Asian pork marinade"
			description="Elevate your pork dishes with this rich, Vietnamese-inspired marinade. Perfect for grilling, roasting, or pan-frying pork to perfection."
			image={metaImage}
		>
			<Post
				title="Asian pork marinade"
				heroImage={heroImage}
				ingredients={
					<Ingredients
						ingredientSuffix="batch"
						ingredients={INGREDIENTS}
						onChangeMultiplier={setMultiplier}
						additionalMeta={
							<Badge
								value={`~${PORK_PER_BATCH * multiplier}g`}
								label="pork per batch"
							/>
						}
					/>
				}
				method={<Method recipeMethod={STEPS} />}
				description={
					<>
						<Text variant="ingress">
							Elevate your pork dishes with this rich, Vietnamese-inspired
							marinade. Perfect for grilling, roasting, or pan-frying pork to
							perfection.
						</Text>
					</>
				}
			/>
		</Page>
	);
}
