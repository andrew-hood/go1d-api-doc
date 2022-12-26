import React from "react";
import { DetailsCard } from "@components/Card/DetailsCard";

export default {
  title: "Components/DetailsCard",
  component: DetailsCard,
};

const Template = (args) => <DetailsCard {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: "Test Title",
  content: <p>Test Content</p>,
};
