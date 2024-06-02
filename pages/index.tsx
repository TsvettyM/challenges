import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Homepage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <div className="flex flex-col justify-center items-center space-y-5 py-10 text-3xl">
        <Link href="/project-1">Project One</Link>
        <Link href="/project-2">Project Two</Link>
        <Link href="/project-3">Project Three</Link>
        <Link href="/project-4">Project Four</Link>
        <Link href="/project-5">Project Five</Link>
        <Link href="/project-6">Project Six</Link>
        <Link href="/project-7">Project Seven</Link>
        <Link href="/project-8">Project Eight</Link>
        <Link href="/project-9">Project Nine</Link>
        <Link href="/project-10">Project Ten</Link>
        <Link href="/project-11">Project Eleven</Link>
      </div>
    </>
  );
};

export default Homepage;
