import Image from "next/image";

import image1 from "public/images/misc/window-pane-test.jpg";

import { Alert } from "components/Alert/Alert";

export const WindowPaneTest = () => {
  return (
    <Alert
      description={
        <>
          The dough is ready when it passes the windowpane test. Wet your hands,
          take a piece of dough, and gently stretch it. If it doesn't break, it
          has passed the test! If not, knead a few more minutes.
          <span className="mt-6 block">
            <Image
              className=""
              src={image1}
              alt=""
              placeholder="blur"
              quality={100}
            />
            <span className="text-xs text-right block italic mt-1">
              Image courtesy of Ankarsum
            </span>
          </span>
        </>
      }
    />
  );
};
