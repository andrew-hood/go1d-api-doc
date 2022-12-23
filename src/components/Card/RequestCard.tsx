import { NotificationManager, Text, View } from "@go1d/go1d";
import IconCopy from "@go1d/go1d/build/components/Icons/Copy";
import IconVideoplay from "@go1d/go1d/build/components/Icons/Videoplay";
import React, { FC, useState } from "react";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { OpenAPIV3 } from "openapi-types";
import { BaseCard } from "./BaseCard";
import ButtonGroup from "@components/Button/ButtonGroup";
import SyntaxHighlighter from "react-syntax-highlighter";

interface Props {
  path: string;
  method: string;
  operationObject: OpenAPIV3.OperationObject;
  initialLanguage?: string;
}

const LANGUAGE_OPTIONS = {
  curl: { label: "cURL", syntax: "bash" },
  js: { label: "JS", syntax: "javascript" },
  php: { label: "PHP", syntax: "php" },
};

const ACTION_OPTIONS = {
  execute: { icon: <IconVideoplay size={1} /> },
  copy: { icon: <IconCopy size={1} /> },
};

export const RequestCard: FC<Props> = ({
  path,
  method,
  operationObject,
  initialLanguage = "curl",
}) => {
  const [content, setContent] = useState("");
  const [language, setLanguage] = useState(initialLanguage);

  const handleCopyCode = () => {
    var copyText: any = document.getElementById(`${method}_${path}_code`);
    if (copyText) {
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(copyText?.value);
      document.execCommand("copy");

      NotificationManager.success({
        message: <Text>Snippet copied</Text>,
        options: {
          lifetime: 3000,
          isOpen: true,
        },
      });
    }
  };

  return (
    <BaseCard
      mode="dark"
      maxHeight="60vh"
      header={
        <View
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <ButtonGroup
            items={LANGUAGE_OPTIONS}
            selected={language}
            onClick={setLanguage}
            itemRenderer={(key, item) => item.label}
          />
          <ButtonGroup
            items={ACTION_OPTIONS}
            onClick={handleCopyCode}
            itemRenderer={(key, item) => item.icon}
          />
        </View>
      }
    >
      <View
        css={{
          "& > pre": {
            background: "transparent !important",
            fontFamily: "monospace",
            fontSize: "16px",
          },
        }}
      >
        <SyntaxHighlighter language="bash" style={dark} showLineNumbers={true}>
          {content}
        </SyntaxHighlighter>
      </View>
      <textarea
        aria-hidden={true}
        id={`${method}_${path}_code`}
        value={content}
        style={{ zIndex: -1, height: 0 }}
        readOnly={true}
      />
    </BaseCard>
  );
};
