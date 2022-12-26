import React from "react";
import { BaseCard } from "@components/Card/BaseCard";

export default {
  title: "Foundations/BaseCard",
  component: BaseCard,
};

const Template = (args) => <BaseCard {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: <p>Test Content1</p>,
};
