import CommonButton from "@/features/common/components/CommonButton";
import IconDownload from "@/features/icons/components/IconDownload";
import IconLogo from "@/features/icons/components/IconLogo";
import IconNav from "@/features/icons/components/IconNav";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const HomepagePaymentLandingPage = () => {
  const [isOpenMenu, setItOpenMenu] = useState(false);

  function showNav() {
    if (isOpenMenu) {
      document.body.style.overflow = "click";
      setItOpenMenu(false);
    } else {
      document.body.style.overflow = "hidden";
      setItOpenMenu(true);
    }
  }

  return (
    <section className="homepage__payment--page max-w-[700px] md:max-w-[900px] lg:max-w-[1200px] mx-auto flex justify-center items-center w-full h-full p-5 my-10 md:my-auto">
      <div className="bg-[#2C292C] rounded-lg w-full h-auto">
        <div className="container">
          <header className="flex items-center w-full py-6">
            <IconLogo className="mr-auto w-8 h-8" />

            <button type="button" onClick={showNav}>
              <IconNav className="ml-auto h-8 w-8 md:hidden" />
            </button>

            {isOpenMenu ? (
              <div className="mobile__menu z-50 fixed h-full top-0 left-0 duration-200">
                <button
                  type="button"
                  className="absolute w-full h-full bg-[#d3bdd8] left-0 top-0"
                  onClick={showNav}
                />

                <div className="h-[calc(100%-50px)] bg-[#c19fc9] max-w-[300px] w-full fixed right-0 rounded-b-xl rounded-tl-xl p-6">
                  <button
                    type="button"
                    onClick={showNav}
                    className="close__btn flex ml-auto pb-4 text-black font-bold"
                  >
                    X
                  </button>

                  <Link
                    href="/"
                    className="flex items-center text-black font-bold pb-3"
                  >
                    Features
                  </Link>
                  <Link
                    href="/"
                    className="flex items-center text-black font-bold pb-3"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/"
                    className="flex items-center text-black font-bold pb-3"
                  >
                    Help
                  </Link>
                  <Link
                    href="/"
                    className="flex items-center text-black font-bold pb-3"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/"
                    className="flex items-center text-black font-bold pb-3"
                  >
                    About us
                  </Link>
                </div>
              </div>
            ) : null}

            <nav className="hidden md:flex gap-5 text-white font-medium mr-auto">
              <Link href="/">Features</Link>
              <Link href="/">Pricing</Link>
              <Link href="/">Help</Link>
              <Link href="/">Blog</Link>
              <Link href="/">About us</Link>
            </nav>

            <div className="hidden md:flex gap-3">
              <CommonButton
                type="button"
                href="/"
                title="Log In"
                style="purple"
                className="rounded-md text-sm text-black font-semibold"
              />

              <CommonButton
                type="button"
                href="/"
                title="Sign Up"
                style="purple"
                className="rounded-md text-sm text-black font-semibold"
              />
            </div>
          </header>

          <div className="bottom flex flex-col md:flex-row justify-center items-center w-full h-full mt-8 mb-20">
            <div className="left flex flex-col justify-center md:justify-start items-center md:items-start mr-0 md:mr-auto">
              <p className="uppercase text-sm text-gray-300 font-medium">
                Start Saving Money
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center md:text-start text-white font-bold max-w-[250px] sm:max-w-[340px] mt-2 sm:mt-5 mb-6 sm:mb-10">
                Smart Credit Card For Your Daily Life.
              </h1>

              <div className="flex relative">
                <CommonButton
                  type="button"
                  href="/"
                  title="Download"
                  style="purple"
                  icon={<IconDownload className="relative ml-3" />}
                  className="rounded-lg text-sm text-black font-semibold py-3 px-6"
                />
              </div>
            </div>

            <div className="right relative w-[220px] sm:w-[280px] lg:w-[330px] h-[260px] sm:h-[340px] lg:h-[390px] mt-7 sm:mt-5 md:mt-0">
              <Image
                className="relative"
                src="/images/dark-mode-img.png"
                alt=""
                fill
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepagePaymentLandingPage;
