import HomepageMultiSelectSearch from "@/features/homepage/components/HomepageMultiSelectSearch";
import { NextPage } from "next";
import Head from "next/head";

const ProjectNine: NextPage = () => {
  return (
    <>
      <Head>
        <title>Project Nine</title>
      </Head>

      <HomepageMultiSelectSearch />
    </>
  );
};

export default ProjectNine;
