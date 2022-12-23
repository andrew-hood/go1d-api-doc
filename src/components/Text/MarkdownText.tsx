import { Text, TextProps } from "@go1d/go1d";
import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import "./style.scss";

interface Props {
  text: string;
  props?: any;
}

export const MarkdownText: FC<Props & TextProps> = ({ text, ...props }) => {
  return (
    <Text {...props}>
      <ReactMarkdown className="markdown-body">{text}</ReactMarkdown>
    </Text>
  );
};
