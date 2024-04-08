import React from "react";

import metaImage from "public/images/techniques/baking-home-oven/thumbnails/meta.png";
import heroImage from "public/images/techniques/baking-home-oven/thumbnails/tall.jpg";

import { Link } from "components/Link/Link";
import { Method } from "components/Method/Method";
import { Page } from "components/Page/Page";
import { Post } from "components/Post/Post";
import { Text } from "components/Text/Text";

const STEPS = [
	<Text>
		Insert your pizza steel into the oven and preheat it to <b>275°C/525°F</b>{" "}
		for at least one hour. During the preheat, prepare all the toppings
	</Text>,
	<Text>
		When the oven is preheated, gently{" "}
		<Link external href="https://youtu.be/OjsCEJ8CWlg?t=669">
			knead the dough
		</Link>{" "}
		in to a <b>30cm / 12”</b> round pizza
	</Text>,
	<Text>
		Spread a thin layer of the tomato sauce (or crème fraîche if you're doing a
		bianco) on the pizza. Do not do this step for all your pizzas at the same
		time. If you let the pizza, with the sauce on it, lie on the kitchen counter
		for too long the bottom will get all soggy and it will stick to the pizza
		peel
	</Text>,
	<Text>
		Lightly flour the pizza peel so the pizza doesn't stick and then transfer
		the pizza to the pizza peel
	</Text>,
	<Text>
		Put the pizza in the oven, on the pizza steel, and let it bake for about
		<br /> <b>3 minutes</b>, or until the crust is slightly browned
	</Text>,
	<Text>
		Pull out the pizza, and <b>rotate it 180 degrees</b> to get an even burn on
		the crust. Add the cheese and toppings
	</Text>,
	<Text>
		Put the pizza back in the oven and let it bake for an additional{" "}
		<b>3 minutes</b>, or until the crust and bottom has a nice color and the
		cheese has melted
	</Text>,
	<Text>
		Pull out the pizza and let it rest for <b>3-4 minutes</b>, preferably on a
		perforated baking sheet so the bottom doesn't get soggy. You can read more
		about good-to-have kitchen gadgets{" "}
		<Link href="/guides/gear-for-baking">here</Link>.
	</Text>,
];

export default function BakingInHomeOven() {
	return (
		<Page
			metaTitle="Baking pizza in a home oven"
			description="A guide to get the best pizza result when baking in a regular home oven"
			image={metaImage}
		>
			<Post
				title="Baking pizza in a home oven"
				heroImage={heroImage}
				description={
					<Text variant="ingress">
						Pizza loves heat. But a regular home oven doesn't provide as much
						heat as professional ones or wood ovens. But do not fear, there are
						a few tricks you can do to get extremely good results in your home
						oven!
					</Text>
				}
			>
				<div className="lg:grid lg:grid-cols-12 lg:gap-16 pt-8 lg:pt-20">
					<div className="lg:col-span-5">
						<Text variant="h2">
							First, three important things about baking in a home oven
						</Text>

						<div className="mt-6">
							<Text variant="h3">1. Pizza steel</Text>
							<div className="">
								<Text>
									Pizza is very forgiving, and there’s a lot of shortcuts you
									can make. You don’t need a fancy Tipo 00 flour, San Marzano
									tomatoes or salt from some weird mountain in the alps. It will
									make a difference, sure, but not <i>that</i> big of a
									difference.
								</Text>
								<Text>
									But the one thing that will have a huge impact on the pizza is
									a pizza steel. Not a pizza <b>stone</b>, a pizza <b>steel</b>.
									The pizza steel maintains heat much much better than a baking
									sheet or a pizza stone, making your crust all brown and
									crispy. If you want to level up your pizza game, I highly
									recommend investing in one, you can get a great one for $70 -
									$200. For more baking gear, checkout{" "}
									<Link href="/guides/gear-for-baking">this</Link> guide.
								</Text>
							</div>
						</div>

						<div className="mt-12">
							<Text variant="h3">2. Preheating the oven</Text>
							<div className="">
								<Text>
									The next important thing is preheating your oven. If you’re
									using a pizza stone or pizza steel you need to preheat it for
									at least 60 minutes at the highest temperature. That’s 1 hour.
									60 minutes. 3600 seconds. <br />
									<br />
									<b>Do. Not. Skip. The. Preheat.</b> <br />
									<br />
									If you’re baking the pizza on a baking sheet preheating isn’t
									as important. Once the oven is at the highest temperature you
									can start baking the pizza.
								</Text>
							</div>
						</div>

						<div className="mt-12">
							<Text variant="h3">3. Pre baking the dough</Text>
							<div className="">
								<Text>
									So “real” pizza is supposed to be cooked in 90-180 seconds
									which means you have to have an extremely hot oven (more than
									450°C/840°F), which means either a professional pizza oven or
									something like an Ooni. But I don’t, and probably not you
									either. My oven only goes to 275°C/525°F. This means we have
									to make some adjustments.
								</Text>
								<Text>
									When cooking in a “professional” oven you can throw all the
									ingredients on the pizza; the tomato sauce, the cheese and the
									toppings and they will all be done within 180 seconds. But
									this isn’t the case with colder ovens like ours. If you add
									all the toppings on the pizza from the start the following
									will happen:
								</Text>

								<div className="my-8">
									<Text>
										<b>0 seconds</b>: The pizza is inserted into the oven
									</Text>
									<Text>
										<b>180 seconds</b>: The cheese is now melted and perfect
									</Text>
									<Text>
										<b>420 seconds</b>: The crust is now perfectly crispy and
										the tomato sauce is cooked. But the cheese is overcooked
										which makes it all oily, transparent and yucky
									</Text>
								</div>

								<Text>
									So the dough takes 420 seconds (give or take) to cook, but the
									cheese takes a lot less time. This means we need to first to
									just cook just the dough and the tomato sauce, and then add
									the cheese.
								</Text>

								<Text>
									“But what about the toppings?”. So since we’re adding the
									toppings about halfway through the cooking some toppings might
									not be cooked properly in that time. So if you want to add
									mushrooms, pepperoni, salsiccia or similar things I’d suggest
									pre-cooking them and either add them with the cheese, or when
									the pizza is done.
								</Text>

								<Text>
									The timings below are what works best for my 275°C/525°F oven.
									Your oven might need longer or shorter cooking time, so I’d
									suggest making a test pizza and note the times to make sure
									the pizza comes out great!
								</Text>
							</div>
						</div>
					</div>

					<div className="lg:col-span-7 mt-12 lg:mt-0">
						<Text variant="h2">Method</Text>
						<Method recipeMethod={STEPS} />
					</div>
				</div>
			</Post>
		</Page>
	);
}
