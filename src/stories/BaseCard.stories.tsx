import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BaseCard } from "@components/Card/BaseCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Foundations/BaseCard",
  component: BaseCard,
} as ComponentMeta<typeof BaseCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseCard> = (args) => (
  <BaseCard {...args} />
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  children: <p>Test Content1</p>,
};
