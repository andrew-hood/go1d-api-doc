import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DetailsCard } from "@components/Card/DetailsCard";

export default {
  title: "Components/DetailsCard",
  component: DetailsCard,
} as ComponentMeta<typeof DetailsCard>;

const Template: ComponentStory<typeof DetailsCard> = (args) => (
  <DetailsCard {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  title: "Test Title",
  content: <p>Test Content</p>,
};
