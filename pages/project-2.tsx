import HomepagePaymentLandingPage from "@/features/homepage/components/HomepagePaymentLandingPage";
import { NextPage } from "next";
import Head from "next/head";

const ProjectTwo: NextPage = () => {
  return (
    <>
      <Head>
        <title>Project Two</title>
      </Head>

      <HomepagePaymentLandingPage />
    </>
  );
};

export default ProjectTwo;
