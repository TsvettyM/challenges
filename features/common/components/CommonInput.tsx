import classNames from "classnames";
import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import CommonError from "./CommonError";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  hookRegister: UseFormRegisterReturn;
  fieldError: FieldError | undefined;
  label?: string;
  className?: string;
}

const CommonInput = (props: IProps) => {
  const { hookRegister, fieldError, className, ...rest } = props;

  return (
    <div className="common__input flex flex-col justify-center items-center relative h-full w-full">
      <input
        className={classNames(
          "w-full mt-3.5 h-full bg-white p-3 font-medium rounded-md border border-black/10 outline-none",
          { [className ?? ""]: className }
        )}
        {...hookRegister}
        {...rest}
        required={false}
      />

      {fieldError?.message ? <CommonError fieldError={fieldError} /> : null}
    </div>
  );
};

export default CommonInput;
