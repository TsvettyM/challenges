import Image from "next/image";
import CommonButton from "./CommonButton";
import { useEffect, useState } from "react";
import IconQuoteMark from "@/features/icons/components/IconQuoteMark";
import axios from "axios";
import IconTwitter from "@/features/icons/components/IconTwitter";

const RandomQuoteBox = () => {
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState<{
    text: string;
    author: string;
  }>({ text: "", author: "" });

  useEffect(() => {
    axios.get("https://type.fit/api/quotes?ref=hackernoon.com").then((res) => {
      setQuotes(res.data);
      setCurrentQuote(res.data[Math.floor(Math.random() * res.data.length)]);
    });
  }, []);

  function handleQuote() {
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }

  return (
    <div className="random__quote flex flex-col relative justify-center items-center w-[450px] shadow-xl rounded-md p-6 border border-black/5">
      <div className="flex relative">
        <Image src={"/images/bg-quote-img.png"} alt="" fill draggable={false} />
      </div>

      <IconQuoteMark className="fill-[#F583A7] size-[90px] flex-shrink-0" />

      <p className="text-2xl text-[#354AA4] italic font-bold text-center max-w-[360px]">
        {currentQuote.text}
      </p>
      <hr className="border-[#354AA4] w-[350px] my-2 border-t-1" />
      <h4 className="text-2xl text-[#F583A7] italic font-bold">
        {currentQuote.author}
      </h4>

      <div className="flex justify-center items-center w-full mt-3">
        <IconTwitter className="h-11 w-11" />

        <CommonButton
          type="button"
          onClick={handleQuote}
          style="blue"
          title="New Quote"
          className="text-base text-[#F583A7] font-bold rounded-md ml-auto"
        />
      </div>
    </div>
  );
};

export default RandomQuoteBox;
