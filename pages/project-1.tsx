import HomepageBlogCard from "@/features/homepage/components/HomepageBlogCard";
import { NextPage } from "next";
import Head from "next/head";

const ProjectOne: NextPage = () => {
  return (
    <>
      <Head>
        <title>Project One</title>
      </Head>

      <HomepageBlogCard />
    </>
  );
};

export default ProjectOne;
