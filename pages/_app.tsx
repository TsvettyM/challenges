import type { AppProps } from "next/app";
import "../styles/global.scss";
import { DM_Sans } from "next/font/google";
import { useRouter } from "next/router";
import classNames from "classnames";

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  console.log(router.pathname);

  function getColor() {
    switch (router.pathname) {
      case "/project-1":
        return "bg-[#f2d9bd]";
      case "/project-2":
        return "bg-[#d3bdd8]";
      case "/project-3":
        return "bg-[#1A1B1D] h-auto";
      case "/project-4":
        return "bg-transparent";
      case "/project-5":
        return "bg-gradient-to-r from-[#65ACFE] to-[#768BFF]";
      case "/project-6":
        return "bg-[#FEFDFB]";
      case "/project-7":
        return "bg-[#1A2036]";
      case "/project-8":
        return "bg-[#d3bdd8]";
      case "/project-9":
        return "bg-[#EDEFFB]";
      case "/project-10":
        return "bg-white";
      case "/project-11":
        return "bg-white";
      default:
        return "bg-[#f2d9bd]";
    }
  }
  return (
    <main
      className={classNames({
        [dmSans.className]: dmSans.className,
        [getColor()]: getColor(),
      })}
    >
      <Component {...pageProps} />
    </main>
  );
}
