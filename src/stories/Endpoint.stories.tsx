import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Endpoint } from "@components/Endpoint";

export default {
  title: "Components/Endpoint",
  component: Endpoint,
} as ComponentMeta<typeof Endpoint>;

const Template: ComponentStory<typeof Endpoint> = (args) => (
  <Endpoint {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  operation: {
    tags: ["Test"],
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
    operationId: "getUsers",
    description: "An endpoint for testing",
    responses: {
      200: {
        description: "Successful",
        content: {
          "application/json": {
            schema: {
              properties: {
                id: {
                  type: "integer",
                  description: "The unique identifier for the webhook.",
                  example: 3600,
                },
              },
            },
          },
        },
      },
      404: {
        description: "Could not find the item",
        content: {
          "application/json": {
            schema: {
              properties: {
                id: {
                  type: "integer",
                  description: "The unique identifier for the webhook.",
                  example: 1600,
                },
              },
            },
          },
        },
      },
    },
  },
};
