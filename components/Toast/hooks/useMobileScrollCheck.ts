import { useEffect, useRef, useState } from "react";
import { throttle } from "lodash";

export const useMobileScrollCheck = (
  isVisible: boolean,
  // eslint-disable-next-line no-unused-vars
  setIsVisible: (isVisible: boolean) => void,
  scrollLimit: number,
  throttleDelay: number
) => {
  const checkScrollTopRef = useRef<(() => void) | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isSmallScreen = window.innerWidth < 700;
    setIsMobile(isSmallScreen);

    if (!isSmallScreen) {
      setIsVisible(true);
    }
  }, [setIsVisible]);

  checkScrollTopRef.current = throttle(() => {
    if (isMobile && window.pageYOffset > scrollLimit) {
      setIsVisible(true);

      if (checkScrollTopRef.current) {
        window.removeEventListener("scroll", checkScrollTopRef.current);
      }
    }
  }, throttleDelay);

  useEffect(() => {
    const checkScrollTop = checkScrollTopRef.current;
    if (!isVisible && checkScrollTop && isMobile) {
      window.addEventListener("scroll", checkScrollTop);
    }
    return () => {
      if (checkScrollTop && isMobile) {
        window.removeEventListener("scroll", checkScrollTop);
      }
    };
  }, [isVisible, isMobile]);
};
