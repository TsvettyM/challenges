import PricingCardBox from "@/features/common/components/PricingCardBox";
import React, { useState } from "react";
import CommonButtonToggle from "@/features/common/components/CommonButtonToggle";

const HomepagePricingCardPage = () => {
  const [isMonthly, setIsMonthly] = useState<boolean>(false);

  function handleIsMonthly() {
    setIsMonthly(!isMonthly);
  }

  return (
    <section className="homepage__pricing--card pb-10">
      <div className="container flex flex-col justify-center items-center h-full ">
        <div className="top flex flex-col justify-center items-center fixed top-0 bg-[#BB1E49] text-white w-[300px] h-16 rounded-bl-lg rounded-br-lg">
          <p className="text-xs py-1">Your current plan</p>
          <h3 className="flex justify-center items-center font-bold mb-2">
            Starter Trial
            <span className="block size-1 bg-white mx-2 rounded-xl" />
            500MAUs
          </h3>
        </div>

        <div className="bottom flex flex-col justify-center items-center mt-40 h-full text-white">
          <h1 className="text-3xl font-bold mb-6">Choose a plan</h1>
          <div className="flex text-sm font-normal gap-3">
            <p>Billed monthly</p>
            <div className="flex items-center justify-center">
              <CommonButtonToggle
                handleToggle={handleIsMonthly}
                isToggled={isMonthly}
              />
            </div>
            <p>Billed annually</p>
          </div>
        </div>

        <div className="flex gap-6 my-8">
          <PricingCardBox
            title="Starter"
            price={isMonthly ? 19 : 228}
            perks={[
              "500 MAUs",
              "3 projects",
              "Unlimited guides",
              "Unlimited flows",
              "Unlimited branded themes",
              "Email support",
            ]}
            type="plan"
            isMonthly={isMonthly}
          />

          <PricingCardBox
            title="Pro"
            price={isMonthly ? 99 : 1188}
            perks={[
              "500 MAUs",
              "3 projects",
              "Unlimited guides",
              "Unlimited flows",
              "Unlimited branded themes",
              "Email support",
            ]}
            type="plan"
            isMonthly={isMonthly}
            hasDropdown
          />

          <PricingCardBox
            title="Enterprise"
            perks={[
              "500 MAUs",
              "3 projects",
              "Unlimited guides",
              "Unlimited flows",
              "Unlimited branded themes",
              "Email support",
            ]}
            type="contact"
          />
        </div>
      </div>
    </section>
  );
};

export default HomepagePricingCardPage;
