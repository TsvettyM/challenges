import HomepageComics from "@/features/homepage/components/HomepageComics";
import { NextPage } from "next";
import Head from "next/head";

const ProjectEleven: NextPage = () => {
  return (
    <>
      <Head>
        <title>Project Eleven</title>
      </Head>

      <HomepageComics />
    </>
  );
};

export default ProjectEleven;
