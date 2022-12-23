import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MarkdownText } from "@components/Text/MarkdownText";

export default {
  title: "Foundations/MarkdownText",
  component: MarkdownText,
} as ComponentMeta<typeof MarkdownText>;

const Template: ComponentStory<typeof MarkdownText> = (args) => (
  <MarkdownText {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  text: `# Main Title \n ## Subtitle
    # Bash Example

    Lorem ipsum...
  `,
};
