import IconCross from "@/features/icons/components/IconCross";
import classNames from "classnames";
import { useState } from "react";

const HomepageMultiSelectSearch = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [selectedData, setSelectedData] = useState<string[]>([]);

  function handleOpen() {
    setIsOpenMenu(!isOpenMenu);
  }

  function handleSelect(item: string) {
    setSelectedData((prevState: string[]) => {
      if (prevState.includes(item)) {
        return prevState.filter((existingItem) => existingItem !== item);
      }
      return [...prevState, item];
    });
  }

  function handleRemove(item: string) {
    setSelectedData((prevState: string[]) => {
      return prevState.filter((existingItem) => existingItem !== item);
    });
  }

  const data = ["1", "2", "3", "4", "5", "6", "7"];

  return (
    <section className="homepage__multiselect--search flex justify-center items-center py-40 w-full bg-yellow-950 h-full">
      <div className="multi__select relative w-full max-w-[500px]">
        <div
          className="w-full flex items-center gap-2 h-11 bg-white border border-black rounded-md p-3 text-left"
          onClick={handleOpen}
        >
          {selectedData.length > 0
            ? selectedData.map((item) => {
                return (
                  <span
                    className="flex items-center text-left bg-[#EDEFFA] py-0.5 px-2 rounded-lg "
                    key={item}
                  >
                    {item}
                    <button type="button" onClick={() => handleRemove(item)}>
                      <IconCross className="ml-3 h-2 w-2" />
                    </button>
                  </span>
                );
              })
            : "Open"}

          {selectedData.length > 0 ? (
            <button
              type="button"
              className="ml-auto"
              onClick={() => setSelectedData([])}
            >
              <IconCross className="ml-3 h-2 w-2" />
            </button>
          ) : null}
        </div>
        {isOpenMenu ? (
          <div className="absolute flex flex-col overflow-y-auto w-full h-[200px] border border-black top-14 bg-white p-2 rounded-md">
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSelect(item)}
                  className={classNames(
                    "text-left font-semibold p-2 rounded-md mb-1 hover:bg-black/20 duration-200",
                    {
                      "bg-[#EDEFFA] mb-1 rounded-md":
                        selectedData.includes(item),
                    }
                  )}
                >
                  {item}
                </button>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default HomepageMultiSelectSearch;
