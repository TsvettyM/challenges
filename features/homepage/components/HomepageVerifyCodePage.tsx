import CommonButton from "@/features/common/components/CommonButton";
import VerificationEnterCode from "@/features/common/components/VerificationEnterCode";
import React, { useState } from "react";

const HomepageVerifyCodePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="homepage__verification flex flex-col justify-center items-center py-20 w-full bg-black">
      <form className="flex flex-col justify-center items-center bg-[#252B43] w-full max-w-[700px] rounded-xl px-7 pb-8">
        <h4 className="text-2xl text-[#B2B7D3] font-bold mt-20 mb-2">
          Verify your email address
        </h4>
        <p className="text-center text-[#B2B7D3] text-sm max-w-[500px]">
          A four-digit code has been sent to your email name@frontendpro.dev.
          Please enter the code below to verify your email address.
        </p>

        <VerificationEnterCode isLoading={isLoading} />

        <CommonButton
          type="button"
          style="darkBlue"
          title=" Verify OTP"
          className="w-[300px] border-b-4 border-b-[#454B63] text-[#B2B7D3] font-bold rounded-sm"
          disabled={isLoading}
        />
      </form>
    </section>
  );
};

export default HomepageVerifyCodePage;
