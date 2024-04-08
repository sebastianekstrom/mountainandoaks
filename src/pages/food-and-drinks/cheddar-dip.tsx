import React from "react";

import image1 from "public/images/recipes/cheddar-dip/1.png";
import image3 from "public/images/recipes/cheddar-dip/3.png";
import image4 from "public/images/recipes/cheddar-dip/4.png";
import image5 from "public/images/recipes/cheddar-dip/5.png";
import metaImage from "public/images/recipes/cheddar-dip/thumbnails/meta.png";
import heroImage from "public/images/recipes/cheddar-dip/thumbnails/tall.png";

import { Alert } from "components/Alert/Alert";
import { Badge } from "components/Badge/Badge";
import { Ingredients } from "components/Ingredients/Ingredients";
import { Method } from "components/Method/Method";
import { MethodImage } from "components/MethodImage/MethodImage";
import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";
import { Text } from "components/Text/Text";

const INGREDIENTS = [
	{
		value: 176,
		label: "Cheddar",
	},
	{
		value: 100,
		label: "White wine",
	},
	{
		value: 100,
		label: "Water",
	},
	{
		value: 65,
		label: "Gruyere",
	},
	{
		value: 45,
		label: "Creme cheese",
	},
	{
		value: 12.8,
		label: "Sodium citrate",
	},
	{
		value: 3,
		label: "Salt",
	},
	{
		value: 2.2,
		label: "Iota carrageenan",
	},
];

const STEPS = [
	<Text extra={<MethodImage src={image1} alt="" />}>
		Start by prepping the ingredients: <b>measure</b> the dry and liquid
		components and <b>grate</b> the cheese.
	</Text>,
	<Text>
		Combine <b>water</b> and <b>wine</b> in a saucepan.
	</Text>,
	<Text>
		Heat the liquid to <b>70°C/158°F</b>.
	</Text>,
	<Text
		extra={
			<Alert
				title="Sodium citrate"
				description={
					<>
						This serves as an emulsifier, ensuring that the fats and liquids in
						the cheese blend together seamlessly, resulting in a smoother,
						non-greasy texture for your dip.
					</>
				}
			/>
		}
	>
		Add the <b>salt</b> and <b>sodium citrate</b> to the mixture.
	</Text>,
	<Text
		extra={
			<Alert
				title="Seaweed"
				description={
					<>
						Iota carrageenan is extracted from seaweed and stabilizes the
						texture and imparts a gel-like consistency to the dip, which helps
						maintain its quality even when cooled and reheated.
					</>
				}
			/>
		}
	>
		<em>Very</em> slowly incorporate the <b>iota carrageenan</b> while
		continuously whisking.
	</Text>,
	<Text extra={<MethodImage src={image3} alt="" />}>
		Reduce heat to low/medium and <b>incorporate the cheeses</b>.
	</Text>,
	<Text
		extra={
			<>
				<MethodImage src={image4} alt="" />
				<MethodImage src={image5} alt="" />
			</>
		}
	>
		All done! Adjust seasoning with extra salt, if necessary. <br />
		<br />
		This dip <b>reheats excellently</b>, making it ideal for preparing several
		hours or even a day in advance. Store it in the refrigerator, and when
		you're ready to serve, simply add a splash of water and reheat it in a
		saucepan.
	</Text>,
];

export default function CheddarDip() {
	return (
		<Page
			metaTitle="Cheddar dip"
			description="This cheddar dip employs a blend of culinary science and straightforward cooking, utilising sodium citrate for a silky-smooth texture and iota carrageenan for textural stability. Perfect for chips, veggies, or as a luxurious drizzle over nachos."
			image={metaImage}
		>
			<Post
				title="Cheddar dip"
				heroImage={heroImage}
				ingredients={
					<Ingredients
						ingredientSuffix="batch"
						ingredients={INGREDIENTS}
						additionalMeta={
							<div className="flex">
								<div className="mr-4">
									<Badge value="15min" label="Prep time" />
								</div>
								<Badge value="30min" label="Total time" />
							</div>
						}
					/>
				}
				method={<Method recipeMethod={STEPS} />}
				description={
					<>
						<Text variant="ingress">
							This cheddar dip employs a blend of culinary science and
							straightforward cooking, utilizing sodium citrate for a
							silky-smooth texture and iota carrageenan for textural stability.
							Perfect for chips, vegetables, or as a luxurious drizzle over
							nachos.
						</Text>
					</>
				}
			/>
		</Page>
	);
}
