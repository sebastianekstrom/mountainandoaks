import React from "react";

import image1 from "public/images/bread/the-simple-loaf/1.png";
import image10 from "public/images/bread/the-simple-loaf/10.png";
import image2 from "public/images/bread/the-simple-loaf/2.png";
import image3 from "public/images/bread/the-simple-loaf/3.png";
import image4 from "public/images/bread/the-simple-loaf/4.png";
import image5 from "public/images/bread/the-simple-loaf/5.png";
import image6 from "public/images/bread/the-simple-loaf/6.png";
import image7 from "public/images/bread/the-simple-loaf/7.png";
import image8 from "public/images/bread/the-simple-loaf/8.png";
import image9 from "public/images/bread/the-simple-loaf/9.png";
import metaImage from "public/images/bread/the-simple-loaf/thumbnails/meta.png";
import heroImage from "public/images/bread/the-simple-loaf/thumbnails/tall.png";

import { Ingredients } from "components/Ingredients/Ingredients";
import { Link } from "components/Link/Link";
import { Method } from "components/Method/Method";
import { MethodImage } from "components/MethodImage/MethodImage";
import { Page } from "components/Page/Page";
import { PokeTest } from "components/PokeTest/PokeTest";
import { Post } from "components/Post/Post";
import { Text } from "components/Text/Text";
import { WindowPaneTest } from "components/WindowPaneTest/WindowPaneTest";

const INGREDIENTS = [
	{
		value: 408,
		label: "Bread flour",
		isFlour: true,
	},
	{
		value: 268,
		label: "Water",
		isWater: true,
	},
	{
		value: 5,
		label: "Instant yeast",
	},
	{
		value: 11,
		label: "Salt",
	},
	{
		value: 13,
		label: "Olive oil",
	},
];

const STEPS = [
	<Text extra={<MethodImage src={image1} alt="" />}>
		Begin by <b>measuring all the ingredients</b>, place them in separate
		containers and set them aside for later use.
	</Text>,
	<Text extra={<MethodImage src={image2} alt="" />}>
		In a mixing bowl, combine the dry ingredients: <b>flour</b>, <b>yeast</b>,
		and <b>salt</b>.
	</Text>,
	<Text extra={<MethodImage src={image3} alt="" />}>
		To the dry mixture, incorporate the liquid elements: <b>water</b> and{" "}
		<b>olive oil</b>.
	</Text>,
	<Text
		extra={
			<>
				<MethodImage src={image4} alt="" />
				<WindowPaneTest />
			</>
		}
	>
		<b>Knead the dough</b>. If you're using a stand mixer, combine the dough on
		low speed for about 3 minutes, then increase the speed to medium and mix for
		an additional 5 minutes to develop the gluten.
		<br />
		<br />
		If kneading by hand, continue for approximately 10 minutes.
	</Text>,
	<Text>
		Preheat your Dutch oven by placing it in the oven set to <b>250°C/482°F</b>.
		<br />
		<br />
		If a Dutch oven is not available, a baking sheet can serve as a substitute.
		However, for optimal results, consider investing in a Dutch oven (you can
		read more about it{" "}
		<Link href="/guides/gear-for-baking#dutch-oven">here</Link>).
	</Text>,
	<Text extra={<MethodImage src={image5} alt="" />}>
		Cover your dough with a damp towel or plastic wrap and allow it to proof for
		an <b>60 minutes</b>.
	</Text>,
	<Text extra={<MethodImage src={image6} alt="" />}>
		Transfer the dough to your kitchen counter for{" "}
		<Link href="https://youtu.be/n0U8RdRdFDU?t=633" external>
			preliminary shaping
		</Link>{" "}
		.
	</Text>,
	<Text extra={<PokeTest />}>
		Proceed to the final proofing stage. Cover the dough with a damp towel again
		and let it proof for another <b>30 minutes</b>.
	</Text>,
	<Text>
		Make the{" "}
		<Link href="https://youtu.be/n0U8RdRdFDU?t=716" external>
			final shape.
		</Link>{" "}
		Try to shape the dough as tight as possible.
	</Text>,
	<Text extra={<MethodImage src={image7} alt="" />}>
		Place the dough on a piece of <b>parchment paper</b> to prevent sticking.
		Remove your preheated Dutch oven or baking sheet from the oven and place the
		dough onto it.
	</Text>,
	<Text extra={<MethodImage src={image8} alt="" />}>
		<b>Score the top of the dough</b> using a razor blade or a sharp knife. This
		will control the bread's rise during baking. If unscored, the bread may
		"burst" at the sides, compromising its rise.
		<br />
		<br />
		You can watch{" "}
		<Link href="https://youtu.be/wfoC-daJq8E?t=192">this video</Link> for some
		good scoring techniques.
	</Text>,
	<Text extra={<MethodImage src={image9} alt="" />}>
		If using a Dutch oven, place its lid back on before putting it in the oven.
		For a baking sheet, spritz the dough with a small amount of water before
		placing it in the oven. This water layer will delay the formation of a
		crust, thus promoting the bread's rise.
	</Text>,
	<Text>
		Once the bread is in the oven, promptly reduce the temperature to{" "}
		<b>220°C / 428°F</b>.
	</Text>,
	<Text>
		After the first <b>20 minutes</b> of baking, remove the Dutch oven lid, if
		using one.
	</Text>,
	<Text>
		Continue baking for an additional <b>20 more minutes</b>, or until the crust
		turns a golden-brown color.
	</Text>,
	<Text extra={<MethodImage src={image10} alt="" />}>
		Your bread is now ready! Carefully remove it from the oven and place it on a
		cooling rack. <b>Let it rest for at least 30 minutes</b> before slicing and
		serving. <br />
		<br />
		Enjoy your homemade bread!
	</Text>,
];

export default function SimpleLoaf() {
	return (
		<Page
			metaTitle="The simple loaf"
			description="A quick and simple loaf of bread"
			image={metaImage}
		>
			<Post
				title="The simple loaf"
				heroImage={heroImage}
				ingredients={
					<Ingredients
						ingredientSuffix="loaf"
						ingredients={INGREDIENTS}
						recipeTimes={{
							proofTimeInMinutes: 120,
							roomTempTimeInMinutes: 60,
							prepTimeInMinutes: 30,
						}}
					/>
				}
				method={<Method recipeMethod={STEPS} />}
				description={
					<Text variant="ingress">
						A basic, simple and delicious loaf of bread that only takes around
						2-3 hours to bake! The hydration is relatively low which makes it
						easy to handle, but high enough to produce a juicy and delicious
						loaf.
					</Text>
				}
			/>
		</Page>
	);
}
