import PricingCardBox from "@/features/common/components/PricingCardBox";
import React, { useState } from "react";
import CommonButtonToggle from "@/features/common/components/CommonButtonToggle";

const HomepagePricingCardPage = () => {
  const [isMonthly, setIsMonthly] = useState<boolean>(false);

  function handleIsMonthly() {
    setIsMonthly(!isMonthly);
  }

  return (
    <section className="homepage__pricing--card py-20 bg-black/90 w-full">
      <div className="container flex flex-col justify-center items-center h-full w-full">
        <div className="bottom flex flex-col justify-center items-center h-full text-white">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full md:max-w-[800px] ">
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
