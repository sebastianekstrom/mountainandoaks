import {
  Provider,
  Root,
  Trigger,
  Portal,
  Content,
  Arrow,
} from "@radix-ui/react-tooltip";
import Image from "next/image";
import React, { useState } from "react";

import { Text } from "components/Text/Text";

export const Tooltip = ({ value }: { value: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <Provider delayDuration={200}>
      <Root open={open} onOpenChange={() => setOpen(!open)}>
        <Trigger asChild>
          <button
            onClick={() => setOpen(!open)}
            className="outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
          >
            <Image
              width={15}
              height={15}
              className="w-[15] h-auto"
              src="/images/misc/question-mark.svg"
              alt=""
              quality={100}
            ></Image>
          </button>
        </Trigger>
        <Portal>
          <Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade select-none rounded-[4px] bg-pill-background p-4  leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
            sideOffset={5}
          >
            <Text>{value}</Text>
            <Arrow className="fill-pill-background" />
          </Content>
        </Portal>
      </Root>
    </Provider>
  );
};
