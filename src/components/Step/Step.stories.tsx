import type { Meta, StoryObj } from "@storybook/react";

import { Step } from "./Step";
import Text from "components/Text";

const meta: Meta<typeof Step> = {
  title: "Components/Step",
  component: Step,
};

export default meta;
type Story = StoryObj<typeof Step>;

export const Component: Story = {
  args: {
    index: 2,
    step: (
      <Text>
        Warm up the water to room temperature, around 20°C/68°F. The easiest way
        to do this is by pouring the water into a glass container and
        microwaving it for a few seconds. Use a thermometer to make sure the
        water isn't too hot, as that would kill the yeast.
      </Text>
    ),
    completable: true,
  },
};
