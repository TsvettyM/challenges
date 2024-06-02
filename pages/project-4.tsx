import HomepageRandomQuote from "@/features/homepage/components/HomepageRandomQuote";
import { NextPage } from "next";
import Head from "next/head";

const ProjectFour: NextPage = () => {
  return (
    <>
      <Head>
        <title>Project Four</title>
      </Head>

      <HomepageRandomQuote />
    </>
  );
};

export default ProjectFour;
