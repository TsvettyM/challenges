import classNames from "classnames";

interface IProps {
  handleToggle: () => void;
  isToggled: boolean;
}

const CommonButtonToggle = ({ handleToggle, isToggled }: IProps) => {
  return (
    <button
      type="button"
      onClick={handleToggle}
      className={classNames(
        " relative duration-200 overflow-hidden h-6 w-12 rounded-full border border-[#BB1E49]",
        {
          "bg-[#BB1E49]": !isToggled,
        }
      )}
    >
      <span
        className={classNames(
          "size-[18px] mt-px rounded-full duration-200 block",
          {
            "bg-[#BB1E49] translate-x-0.5": isToggled,
            "bg-white translate-x-[140%]": !isToggled,
          }
        )}
      />
    </button>
  );
};

export default CommonButtonToggle;
