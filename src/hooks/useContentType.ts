import { get } from "lodash";
import React, { useEffect, useState } from "react";

interface ContentType {
  label: string;
  value: string;
}

export const useContentType = (object: any) => {
  const [options, setOptions] = useState<ContentType[]>([]);
  const [selected, selectOption] = useState<ContentType | null>(null);

  useEffect(() => {
    if (object) {
      const types: ContentType[] = Object.keys(get(object, `content`, {}))
        .filter(
          (type) =>
            Object.keys(get(object, `content.${type}.schema.properties`, {}))
              .length > 0
        )
        .map((type) => ({
          label: type,
          value: type,
        }));

      setOptions(types);
      types.length > 0 && selectOption(types[0]);
    }
  }, [object]);

  return { selected, options, selectOption };
};
