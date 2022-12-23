import { Heading, View } from "@go1d/go1d";
import React, { FC, ReactElement } from "react";
import { BaseCard } from "./BaseCard";

interface Props {
  title: string;
  actions?: ReactElement;
  content: string | ReactElement;
}

export const DetailsCard: FC<Props> = ({ title, actions, content }) => {
  return (
    <BaseCard
      flexGrow={1}
      flexShrink={1}
      border={1}
      borderColor="faded"
      mode="light"
      header={
        <View
          flexDirection="row"
          alignItems="center"
          justifyContent={actions ? "space-between" : "flex-start"}
        >
          <Heading
            semanticElement="h6"
            visualHeadingLevel="Heading 6"
            color="default"
            marginLeft={2}
            children={title}
          />
          {actions}
        </View>
      }
    >
      <View padding={3}>{content}</View>
    </BaseCard>
  );
};
