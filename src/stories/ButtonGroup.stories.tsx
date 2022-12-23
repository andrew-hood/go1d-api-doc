import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonGroup from "@components/Button/ButtonGroup";

export default {
  title: "Foundations/ButtonGroup",
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  items: {
    curl: { label: "cURL", syntax: "bash" },
    js: { label: "JS", syntax: "javascript" },
    php: { label: "PHP", syntax: "php" },
  },
  itemRenderer: (key, item) => item.label,
};
