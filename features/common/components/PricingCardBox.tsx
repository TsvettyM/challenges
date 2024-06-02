import classNames from "classnames";
import CommonButton from "./CommonButton";
import DropButtonMenu from "./DropButtonMenu";

interface IProps {
  title: string;
  price?: number;
  perks: string[];
  isMonthly?: boolean;
  type: "plan" | "contact";
  hasDropdown?: boolean;
}

const PricingCardBox = ({
  title,
  price,
  perks,
  type,
  isMonthly,
  hasDropdown,
}: IProps) => {
  return (
    <div className="pricing__card--box flex flex-col justify-center items-center w-[250px] h-auto rounded-lg p-6 bg-[#23232B]">
      <h4 className="text-center text-lg font-medium text-white">{title}</h4>
      <p className="text-center text-4xl text-white font-bold py-3">
        {type === "contact" ? (
          "Let's talk!"
        ) : (
          <span>
            ${price}
            <span className="text-base"> / {isMonthly ? "month" : "year"}</span>
          </span>
        )}
      </p>
      {hasDropdown ? <DropButtonMenu /> : null}

      <div className={classNames("mb-8", { "mt-20": !hasDropdown })}>
        {perks.map((perk) => {
          return (
            <p className="flex w-full text-[#8A8A92] py-1.5">
              <span className="block size-1 rounded-sm bg-[#BB1E49] mr-2 relative top-2.5" />
              {perk}
            </p>
          );
        })}
      </div>

      <CommonButton
        type="button"
        title={type === "plan" ? "Choose Plan" : "Contact Us"}
        style="red"
        className="rounded-sm text-sm text-[#8A8A92] font-semibold mt-auto"
      />
    </div>
  );
};

export default PricingCardBox;
