import React from "react";
import { Text } from "components/Text/Text";

interface Props {
  description: React.ReactNode | string;
  title?: React.ReactNode | string;
}

export const Alert = ({ description, title }: Props) => {
  return (
    <div className="block p-6 mt-4 text-regular bg-pill-background">
      <div className="flex items-center mb-2">
        <Text variant="h4">{title || "Tip!"}</Text>
      </div>
      <Text>{description}</Text>
    </div>
  );
};
