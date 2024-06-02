import { FieldError } from "react-hook-form";

interface IProps {
  fieldError: FieldError;
}

const CommonError = ({ fieldError }: IProps) => {
  const handleClick = () => {
    if (!fieldError?.ref?.focus) {
      return;
    }
    fieldError.ref.focus();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="mr-[275px] mt-1 text-base text-[#EE434B] font-bold"
    >
      {fieldError.message}
    </button>
  );
};

export default CommonError;
