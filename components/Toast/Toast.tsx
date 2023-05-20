import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Provider,
  Root,
  Title,
  Description,
  Action,
  Viewport,
} from "@radix-ui/react-toast";

import Text from "components/Text";
import { STOPWATCH_PROGRESS_KEY } from "constants/index";
import { MediaControl } from "./components/MediaControl";
import { formatTime } from "./utils/formatTime";
import { useMobileScrollCheck } from "./hooks/useMobileScrollCheck";

export const Toast = () => {
  const [open, setOpen] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isTimerVisible, setIsTimerVisible] = useState(false);
  useMobileScrollCheck(isTimerVisible, setIsTimerVisible, 1000, 200);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTimer((timer) => {
          const newTime = timer + 1;
          localStorage.setItem(STOPWATCH_PROGRESS_KEY, newTime.toString());
          return newTime;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  useEffect(() => {
    const progressValue = localStorage.getItem(STOPWATCH_PROGRESS_KEY);

    if (progressValue) {
      setTimer(parseInt(progressValue, 10));
      setIsTimerVisible(true);
      setOpen(true);
      handleStart();
    }
  }, []);

  const onStartTimer = () => {
    setOpen(true);
    handleStart();
  };

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleClose = () => {
    setIsActive(false);
    setIsPaused(true);
    setOpen(false);

    setTimeout(() => {
      setTimer(0);
      localStorage.removeItem(STOPWATCH_PROGRESS_KEY);
      setIsFullScreen(false);
    }, 200);
  };

  const handleRestart = () => {
    setIsActive(true);
    setIsPaused(false);
    setTimer(0);
  };

  const handleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <Provider swipeDirection="right" duration={Infinity}>
      {isTimerVisible && (
        <button
          onClick={onStartTimer}
          className="fixed bottom-6 right-6"
          data-testid="start-btn"
        >
          <Text
            classNames={`w-[60px] h-[60px] bg-pill-background font-semibold rounded-full flex justify-center items-center !mb-0 transition-opacity`}
          >
            <Image
              width={20}
              height={20}
              className="w-[24px] h-auto"
              src="/icons/stopwatch.svg"
              alt="Stop"
            ></Image>
          </Text>
        </button>
      )}

      <Root
        className="bg-white h-full relative rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[24px]  data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
        open={open}
      >
        <button
          className="p-2 absolute top-[16px] right-[46px]"
          onClick={handleFullScreen}
          data-testid="close-btn"
        >
          <Image
            width={20}
            height={20}
            className="w-[14px] h-auto"
            src={
              isFullScreen ? "/icons/small-mode.svg" : "/icons/large-mode.svg"
            }
            alt="Stop"
          ></Image>
        </button>

        <button
          className="p-2 absolute top-[16px] right-[16px]"
          onClick={handleClose}
          data-testid="close-btn"
        >
          <Image
            width={20}
            height={20}
            className="w-[14px] h-auto"
            src="/icons/cross.svg"
            alt="Stop"
          ></Image>
        </button>
        {!isFullScreen && (
          <Title className="flex items-center mb-4">
            <Image
              width={20}
              height={20}
              className="w-[22px] h-auto"
              src="/icons/stopwatch.svg"
              alt="Stop"
            ></Image>
            <Text variant="body" classNames="ml-2">
              Stopwatch
            </Text>
          </Title>
        )}
        <div
          className={`flex h-full ${
            isFullScreen
              ? "flex-col justify-center"
              : "flex-row justify-between"
          } items-center`}
        >
          <Description>
            <Text
              classNames={`!font-mono ${
                isFullScreen
                  ? "text-[55px] md:text-[300px]"
                  : "text-[24px] md:text-5xl"
              }`}
            >
              {formatTime(timer)}
            </Text>
          </Description>
          <Action className="" asChild altText="Control the stopwatch">
            <div className="flex">
              <div className={isFullScreen ? "mr-2 md:mr-8" : "mr-2"}>
                <MediaControl
                  type={isPaused ? "play" : "pause"}
                  onClick={isPaused ? handleResume : handlePause}
                  size={isFullScreen ? "large" : "small"}
                />
              </div>
              <MediaControl
                type="restart"
                onClick={handleRestart}
                size={isFullScreen ? "large" : "small"}
              />
            </div>
          </Action>
        </div>
      </Root>
      <Viewport
        className={`transition-width [--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] ${
          isFullScreen ? "w-[100%] h-[100%]" : "w-[440px]"
        }   max-w-[100vw] m-0 list-none z-[2147483647] outline-none`}
      />
    </Provider>
  );
};
