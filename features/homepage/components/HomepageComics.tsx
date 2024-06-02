import IconNext from "@/features/icons/components/IconNext";
import IconPrev from "@/features/icons/components/IconPrev";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ComicData {
  month: string;
  num: number;
  link: string;
  year: string;
  news: string;
  safe_title: string;
  transcript: string;
  alt: string;
  img: string;
  title: string;
  day: string;
}

const HomepageComics = () => {
  const [currentComic, setCurrentComic] = useState<ComicData>();

  useEffect(() => {
    axios
      .get("https://xkcd.com/info.0.json")
      .then((res) => {
        setCurrentComic(res.data);
        // setCurrentComic(res.data[Math.floor(Math.random() * res.data.length)]);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleComics() {
    // setCurrentComic(comics[Math.floor(Math.random() * comics.length)]);
  }
  if (!currentComic) {
    return null;
  }

  return (
    <section className="homepage__comics pt-20">
      <div className="container flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold mb-5">XKCD Comics</h1>

        <div className="top flex flex-col justify-center items-center">
          <div className="flex space-x-3 mb-3">
            <button
              type="button"
              onClick={handleComics}
              className="flex justify-center items-center border border-black text-xl rounded-md py-2 px-3"
            >
              <IconPrev /> Prev
            </button>

            <button
              type="button"
              onClick={handleComics}
              className="flex justify-center items-center border border-black text-xl rounded-md py-2 px-3"
            >
              Random
            </button>

            <button
              type="button"
              onClick={handleComics}
              className="flex justify-center items-center border border-black text-xl rounded-md py-2 px-3"
            >
              Next
              <IconNext />
            </button>
          </div>

          <div className="flex space-x-3">
            <button
              type="button"
              onClick={handleComics}
              className="flex justify-center items-center border border-black text-xl rounded-md py-2 px-3"
            >
              <IconPrev /> First
            </button>

            <button
              type="button"
              onClick={handleComics}
              className="flex justify-center items-center border border-black text-xl rounded-md py-2 px-3"
            >
              Last
              <IconNext />
            </button>
          </div>
        </div>

        <div className="center relative h-[100px] w-[300px]">
          <Image src={currentComic.img} alt={currentComic.alt} fill />
        </div>

        <div className="bottom flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold my-3">Search Comics by ID</h2>
          <div className="flex space-x-2">
            <div className="w-full flex items-center gap-2 h-11 bg-white border border-black rounded-md p-3 text-left">
              Comics Number
            </div>
            <button className="text-xl text-white bg-black p-2 rounded-md">
              Find
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageComics;
