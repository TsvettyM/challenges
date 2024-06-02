import classNames from "classnames";
import IconPlus from "@/features/icons/components/IconPlus";
import { useState } from "react";

interface IProps {
  question: string;
  answer?: string;
  style: "orange" | "violet" | "purple" | "pink" | "green" | string;
}

const AccordionBox = ({ style, question, answer }: IProps) => {
  const [isOpenPost, setIsOpenPost] = useState(false);

  function showPost() {
    setIsOpenPost(!isOpenPost);
  }

  const getStyle = () => {
    switch (style) {
      case "orange":
        return "bg-[#FCEFD7] border-[#EBBB88]";
      case "violet":
        return "bg-[#E1E7FD] border-[#99A0F7]";
      case "purple":
        return "bg-[#EDEAFC] border-[#A698E5]";
      case "pink":
        return "bg-[#FCE4F2] border-[#E383B5]";
      case "green":
        return "bg-[#EFFCF3] border-[#65D48E]";
      default:
        return "";
    }
  };

  return (
    <div
      className={classNames(
        "accordion__box w-full h-full duration-200 p-3 mt-5 rounded-sm text-sm border-l-4",
        {
          [getStyle()]: getStyle,
        }
      )}
    >
      <div className="flex items-center">
        <h4>{question}</h4>

        <div className="drop__button flex ml-auto relative">
          <button type="button" onClick={showPost} className="ml-3">
            <IconPlus
              className={classNames(
                "flex justify-center items-center ml-auto duration-200",
                {
                  "rotate-45": isOpenPost,
                }
              )}
            />
          </button>
        </div>
      </div>

      {isOpenPost ? <p className="text-sm">{answer}</p> : null}
    </div>
  );
};

export default AccordionBox;
