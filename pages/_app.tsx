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
  return (
    <main
      className={classNames({
        [dmSans.className]: dmSans.className,
      })}
    >
      <Component {...pageProps} />
    </main>
  );
}
