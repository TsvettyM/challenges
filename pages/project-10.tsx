import HomepageVideoPlayerWeb from "@/features/homepage/components/HomepageVideoPlayerWeb";
import { NextPage } from "next";
import Head from "next/head";

const ProjectTen: NextPage = () => {
  return (
    <>
      <Head>
        <title>Project Ten</title>
      </Head>

      <HomepageVideoPlayerWeb />
    </>
  );
};

export default ProjectTen;
