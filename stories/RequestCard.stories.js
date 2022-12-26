import React from "react";
import { RequestCard } from "@components/Card/RequestCard";

export default {
  title: "Components/RequestCard",
  component: RequestCard,
};

const Template = (args) => <RequestCard {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  path: "",
  method: "",
};
