import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ResponseCard } from "@components/Card/ResponseCard";

export default {
  title: "Components/ResponseCard",
  component: ResponseCard,
} as ComponentMeta<typeof ResponseCard>;

const Template: ComponentStory<typeof ResponseCard> = (args) => (
  <ResponseCard {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  responses: {
    200: {
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
};
