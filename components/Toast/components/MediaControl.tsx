import Image from "next/image";

interface Props {
  type: "play" | "pause" | "restart";
  size: "small" | "large";
  onClick: () => void;
}

export const MediaControl = ({ type, onClick, size }: Props) => {
  let icon;
  let label;
  let testId;

  switch (type) {
    case "play":
      icon = "/icons/play.svg";
      label = "Play";
      testId = "resume-btn";
      break;
    case "pause":
      icon = "/icons/pause.svg";
      label = "Pause";
      testId = "pause-btn";
      break;
    case "restart":
      icon = "/icons/restart.svg";
      label = "Restart";
      testId = "restart-btn";
      break;
  }

  return (
    <button
      onClick={onClick}
      className={`${
        size === "small"
          ? "w-[32px] h-[32px] p-2"
          : "w-[50px] h-[50px] md:w-[100px] md:h-[100px] p-2"
      } inline-flex items-center justify-center rounded-full bg-cta`}
      data-testid={testId}
    >
      <Image
        width={20}
        height={20}
        className={`${
          size === "small" ? "w-[12px]" : "w-[22px] md:w-[42px]"
        } h-auto`}
        src={icon}
        alt="Stop"
      ></Image>
      <span className="sr-only">{label}</span>
    </button>
  );
};
