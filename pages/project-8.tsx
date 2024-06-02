import HomepageCalendarViewer from "@/features/homepage/components/HomepageCalendarViewer";
import { NextPage } from "next";
import Head from "next/head";

const ProjectEight: NextPage = () => {
  return (
    <>
      <Head>
        <title>Project Eight</title>
      </Head>

      <HomepageCalendarViewer />
    </>
  );
};

export default ProjectEight;
