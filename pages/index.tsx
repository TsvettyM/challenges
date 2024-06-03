import HomepageAccordion from "@/features/homepage/components/HomepageAccordion";
import HomepageBlogCard from "@/features/homepage/components/HomepageBlogCard";
import HomepageCalendarViewer from "@/features/homepage/components/HomepageCalendarViewer";
import HomepageContactUsForm from "@/features/homepage/components/HomepageContactUsForm";
import HomepageMultiSelectSearch from "@/features/homepage/components/HomepageMultiSelectSearch";
import HomepagePaymentLandingPage from "@/features/homepage/components/HomepagePaymentLandingPage";
import HomepagePricingCardPage from "@/features/homepage/components/HomepagePricingCardPage";
import HomepageRandomQuote from "@/features/homepage/components/HomepageRandomQuote";
import HomepageVerifyCodePage from "@/features/homepage/components/HomepageVerifyCodePage";
import { NextPage } from "next";
import Head from "next/head";

const Homepage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <div className="flex flex-col justify-center items-center ">
        <HomepageBlogCard />

        <HomepagePaymentLandingPage />

        <HomepagePricingCardPage />

        <HomepageRandomQuote />

        <HomepageContactUsForm />

        <HomepageAccordion />

        <HomepageVerifyCodePage />

        <HomepageCalendarViewer />

        <HomepageMultiSelectSearch />
      </div>
    </>
  );
};

export default Homepage;
