import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import CommonError from "./CommonError";
import classNames from "classnames";

interface IProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  hookRegister: UseFormRegisterReturn;
  fieldError: FieldError | undefined;
  label?: string;
  styleMode: "white";
  className?: string;
}

const CommonTextArea = (props: IProps) => {
  const { label, hookRegister, fieldError, styleMode, className, ...rest } =
    props;

  const getStyle = () => {
    switch (styleMode) {
      case "white":
        return "border border-black/10";
    }
  };

  return (
    <div className="common__input flex flex-col justify-center items-center w-full h-full relative">
      <textarea
        className={classNames(
          "resize-none w-full h-full font-medium border rounded-md my-3.5 p-3 bg-transparent outline-none",
          {
            [getStyle()]: getStyle,
            [className || ""]: className,
          }
        )}
        {...hookRegister}
        {...rest}
        required={false}
      />

      {fieldError?.message ? <CommonError fieldError={fieldError} /> : null}
    </div>
  );
};

export default CommonTextArea;
