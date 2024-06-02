import IconArrowBottom from "@/features/icons/components/IconArrowBottom";
import classNames from "classnames";
import { useState } from "react";

const DropButtonMenu = () => {
  const [isOpenButtonMenu, setIsOpenButtonMenu] = useState(false);

  function showButtonMenu() {
    setIsOpenButtonMenu(!isOpenButtonMenu);
  }

  return (
    <div className="drop__button relative">
      <button
        type="button"
        onClick={showButtonMenu}
        className="flex justify-center items-center text-[#8A8A92] w-[190px] h-10 bg-transparent border border-[#A6A9B0] rounded-sm py-2 px-6 mt-5"
      >
        250 MAUs
        <IconArrowBottom
          className={classNames("flex h-4 w-4 ml-auto duration-200", {
            "rotate-180": isOpenButtonMenu,
          })}
        />
      </button>

      <p className="text-sm text-[#BB1E49] font-medium pt-1 pb-3">
        Monthly active unsave
      </p>
    </div>
  );
};

export default DropButtonMenu;
