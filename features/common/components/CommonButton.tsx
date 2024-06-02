import classNames from "classnames";
import Link from "next/link";
import { ReactNode } from "react";

interface IProps {
  title: string;
  type: "submit" | "reset" | "button";
  style: "purple" | "red" | "darkGray" | "blue" | "bluePurple" | "darkBlue";
  onClick?: () => void;
  href?: string;
  className?: string;
  icon?: ReactNode;
  disabled?: boolean;
}

const CommonButton = (props: IProps) => {
  const { title, type, style, className, href, onClick, icon, disabled } =
    props;

  const getStyle = () => {
    switch (style) {
      case "purple":
        return "bg-[#D3BDD8]";
      case "red":
        return "border border-[#BB1E49] hover:bg-[#BB1E49]";
      case "darkGray":
        return "bg-[#23232B]";
      case "blue":
        return "bg-[#354AA4]";
      case "bluePurple":
        return "bg-gradient-to-r from-[#65ACFE] to-[#768BFF]";
      case "darkBlue":
        return "bg-[#191F35]";
    }
  };

  if (href) {
    return (
      <Link
        href={href}
        className={classNames(
          "common__button flex justify-center items-center h-11 py-2 px-7",
          {
            [getStyle()]: getStyle,
            [className || ""]: className,
          }
        )}
      >
        {title}
        {icon}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        "common__button flex justify-center max-w[50px] items-center h-11 py-2 px-7",
        {
          [getStyle()]: getStyle,
          [className || ""]: className,
        }
      )}
    >
      {title}
      {icon}
    </button>
  );
};

export default CommonButton;
