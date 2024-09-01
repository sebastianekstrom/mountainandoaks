import React from "react";

import { Text } from "components/Text/Text";

export const Badge = ({
  value,
  label,
}: {
  value: string | number;
  label: string;
}) => {
  return (
    <div className="flex flex-col items-center bg-pill-background rounded-[40px] w-[88px] h-[141px] p-[10px]">
      <div className="flex items-center justify-center rounded-full w-[70px] h-[70px] bg-background-regular">
        <Text>{value}</Text>
      </div>
      <Text
        variant="caption"
        classNames="opacity-[.62] mt-[10px] leading-[14px] text-center text-background-regular"
      >
        {label}
      </Text>
    </div>
  );
};
