import HomepagePricingCardPage from "@/features/homepage/components/HomepagePricingCardPage";
import { NextPage } from "next";
import Head from "next/head";

const ProjectThree: NextPage = () => {
  return (
    <>
      <Head>
        <title>Project Three</title>
      </Head>

      <HomepagePricingCardPage />
    </>
  );
};

export default ProjectThree;
