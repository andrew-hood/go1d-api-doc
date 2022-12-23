import { Heading, Link, Prose, Text, View } from "@go1d/go1d";
import { OpenAPIV3 } from "openapi-types";
import React, { FC } from "react";
import { RequestCard } from "@components/Card/RequestCard";
import { ResponseCard } from "@components/Card/ResponseCard";
import { ParameterList } from "@components/List/ParameterList";
import { RequestBodyList } from "@components/List/RequestBodyList";
import { ResponseBodyList } from "@components/List/ResponseBodyList";

interface Props {
  path: string;
  method: string;
  operation: OpenAPIV3.OperationObject;
}

export const Endpoint: FC<Props> = ({ path, method, operation }) => {
  return (
    <View
      id={operation.operationId}
      flexDirection={["column", "row"]}
      alignItems="flex-start"
      justifyContent="space-between"
      borderColor="delicate"
      paddingY={8}
      marginY={8}
      borderTop={1}
    >
      <View flexBasis={["auto", 0.45]}>
        <Link href={`#${operation.operationId}`}>
          <Heading
            semanticElement="h3"
            visualHeadingLevel="Heading 3"
            color="default"
            children={operation.summary}
          />
        </Link>
        <Text marginTop={1} marginBottom={3}>
          <Prose fontSize={2} HTML={operation.description} />
        </Text>
        {/* <AuthScopes security={operation.security || []} /> */}
        <ParameterList parameters={operation.parameters || []} />
        <RequestBodyList requestBody={operation.requestBody || {}} />
        <ResponseBodyList responses={operation.responses || {}} />
      </View>
      <View
        flexBasis={["auto", 0.47]}
        position={["relative", "sticky"]}
        css={{ top: "80px" }}
        maxHeight="90vh"
      >
        <RequestCard path={path} method={method} operationObject={operation} />
        <ResponseCard responses={operation.responses} />
      </View>
    </View>
  );
};
