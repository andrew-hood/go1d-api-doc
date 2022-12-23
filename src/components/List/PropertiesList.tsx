import { View, Text, Heading, ButtonMinimal } from "@go1d/go1d";
import IconMinus from "@go1d/go1d/build/components/Icons/Minus";
import IconPlus from "@go1d/go1d/build/components/Icons/Plus";
import { get } from "lodash";
import { OpenAPIV3, IJsonSchema } from "openapi-types";
import React, { FC, useEffect, useState } from "react";
import { useContentType } from "@hooks/useContentType";
import { MarkdownText } from "../Text/MarkdownText";
import { BaseList } from "./BaseList";

interface Props {
  title: string;
  object:
    | OpenAPIV3.RequestBodyObject
    | OpenAPIV3.ResponseObject
    | OpenAPIV3.ReferenceObject;
}

export const PropertiesList: FC<Props> = ({ title, object }) => {
  const [properties, setProperties] = useState<any>([]);
  const {
    selected: contentType,
    options: contentTypeOptions,
    selectOption: setContentType,
  } = useContentType(object);

  useEffect(() => {
    if (!contentType || !contentType.label) return;

    const values = Object.entries(
      get(object, `content.${contentType.label}.schema.properties`, {})
    )
      .filter(([_, value]) => typeof value === "object")
      .map(([key, value]) => ({
        name: key,
        ...(value as object),
      })) as (IJsonSchema & { name: string })[];
    setProperties(values);
  }, [object, contentType]);

  return contentType ? (
    <BaseList
      title={title}
      items={properties}
      itemRenderer={(item, index) => (
        <View key={index} marginBottom={5}>
          <View flexDirection="row" alignItems="center" marginBottom={2}>
            <Heading
              semanticElement="h5"
              visualHeadingLevel="Heading 5"
              color="default"
              children={item.name}
            />
            <Text fontSize={1} marginLeft={3} color="thin">
              {item.type}
            </Text>
          </View>
          <MarkdownText color="subtle" text={item.description || ""} />
          {item.type === "object" && item?.properties && (
            <ChildObjectList object={item?.properties || {}} />
          )}
        </View>
      )}
      options={contentTypeOptions}
      selected={contentType}
      onChange={setContentType}
    />
  ) : null;
};

interface ChildObjectListProps {
  object: any;
}

export const ChildObjectList: FC<ChildObjectListProps> = ({ object }) => {
  const [visibility, setVisibility] = useState(false);
  const [properties, setProperties] = useState<any>([]);

  useEffect(() => {
    setProperties(
      Object.entries(object).map(([key, value]) => ({
        name: key,
        ...(value as object),
      }))
    );
  }, [object]);

  return properties.length > 0 ? (
    <View
      marginTop={3}
      border={1}
      borderRadius={3}
      borderColor="faded"
      overflow="hidden"
    >
      <ButtonMinimal
        justifyContent="flex-start"
        icon={visibility ? IconMinus : IconPlus}
        size="sm"
        onClick={() => setVisibility(!visibility)}
        backgroundColor={visibility ? "soft" : "background"}
        sizeStyles={{
          sm: {
            typeScale: 1,
            paddingX: 3,
            paddingY: 0,
          },
        }}
      >
        {visibility ? "Hide" : "Show"} child properties
      </ButtonMinimal>
      {visibility && (
        <BaseList
          paddingTop={3}
          paddingX={5}
          items={properties}
          itemRenderer={(item, index) => (
            <View key={index} paddingBottom={4}>
              <View flexDirection="row" alignItems="center">
                <Heading
                  semanticElement="h5"
                  visualHeadingLevel="Heading 5"
                  color="default"
                  children={item.name}
                />
                <Text fontSize={1} marginLeft={3} color="thin">
                  {item.type}
                </Text>
              </View>
              {item.description && (
                <MarkdownText color="subtle" text={item.description || ""} />
              )}
              {item.type === "object" && item.properties && (
                <ChildObjectList object={item?.properties || {}} />
              )}
            </View>
          )}
        />
      )}
    </View>
  ) : null;
};
