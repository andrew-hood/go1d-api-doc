import React, { FC } from "react";
import { PropertiesList } from "./PropertiesList";

interface Props {
  requestBody: any;
}

export const RequestBodyList: FC<Props> = ({ requestBody }) => {
  return <PropertiesList title="Request Object" object={requestBody} />;
};
