import React from "react";
import { PropertiesList } from "@components/List/PropertiesList";

export default {
  title: "Components/PropertiesList",
  component: PropertiesList,
};

const Template = (args) => <PropertiesList {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: "Title",
  object: {
    description: "",
    content: {
      "application/json": {
        schema: {
          properties: {
            id: {
              type: "string",
            },
          },
        },
      },
    },
  },
};

export const WithChildObject = Template.bind({});
WithChildObject.args = {
  title: "With Child Object",
  object: {
    description: "",
    content: {
      "application/json": {
        schema: {
          properties: {
            wallet: {
              type: "object",
              properties: {
                card_number: {
                  type: "string",
                },
              },
            },
          },
        },
      },
    },
  },
};
