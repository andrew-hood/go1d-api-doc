import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RequestCard } from "@components/Card/RequestCard";

export default {
  title: "Components/RequestCard",
  component: RequestCard,
} as ComponentMeta<typeof RequestCard>;

const Template: ComponentStory<typeof RequestCard> = (args) => (
  <RequestCard {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  path: "",
  method: "",
};
