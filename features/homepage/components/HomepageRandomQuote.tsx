import RandomQuoteBox from "@/features/common/components/RandomQuoteBox";
import Image from "next/image";

const HomepageRandomQuote = () => {
  return (
    <section className="homepage__random--quote flex relative w-full h-full py-40">
      <div className="container flex justify-center items-center w-full h-full">
        <Image
          src="/images/bg-quote-img.png"
          alt=""
          fill
          draggable={false}
          style={{
            objectFit: "cover",
            opacity: 0.5,
            filter: "grayscale(100%)",
          }}
        />

        <RandomQuoteBox />
      </div>
    </section>
  );
};

export default HomepageRandomQuote;
