import React from "react";
import { MarkdownText } from "@components/Text/MarkdownText";

export default {
  title: "Foundations/MarkdownText",
  component: MarkdownText,
};

const Template = (args) => <MarkdownText {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  text: `# Main Title \n ## Subtitle
    # Bash Example

    Lorem ipsum...
  `,
};
