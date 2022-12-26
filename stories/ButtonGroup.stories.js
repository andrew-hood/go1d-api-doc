import React from "react";
import { ButtonGroup } from "@components/Button/ButtonGroup";

export default {
  title: "Foundations/ButtonGroup",
  component: ButtonGroup,
};

const Template = (args) => <ButtonGroup {...args} />;

export const ButtonGroupDefault = Template.bind({});
ButtonGroupDefault.args = {
  items: {
    curl: { label: "cURL", syntax: "bash" },
    js: { label: "JS", syntax: "javascript" },
    php: { label: "PHP", syntax: "php" },
  },
  itemRenderer: (key, item) => item.label,
};
