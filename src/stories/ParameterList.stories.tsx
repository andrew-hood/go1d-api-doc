import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ParameterList } from "@components/List/ParameterList";

export default {
  title: "Components/ParameterList",
  component: ParameterList,
} as ComponentMeta<typeof ParameterList>;

const Template: ComponentStory<typeof ParameterList> = (args) => (
  <ParameterList {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  parameters: [
    {
      in: "query",
      name: "type",
      schema: {
        type: "string",
      },
      description: "the type of item",
    },
    {
      in: "query",
      name: "size",
      schema: {
        type: "number",
      },
      description: "the size of the thing",
    },
  ],
};
