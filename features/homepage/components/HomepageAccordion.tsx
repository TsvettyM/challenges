import AccordionBox from "@/features/common/components/AccordionBox";

const HomepageAccordion = () => {
  const data = [
    {
      style: "orange",
      question: "Can I use FrontendPro to prepare a frontend job interview?",
      answer: `FrontendPro is designed to occommodate developers of all skill levels. Our challenges range from beginner to advanced, so there's something for everyone.`,
    },
    {
      style: "purple",
      question:
        "Do I need to have experience in frontend dev to use FrontendFro?",
      answer: `FrontendPro is designed to occommodate developers of all skill levels. Our challenges range from beginner to advanced, so there's something for everyone.`,
    },
    {
      style: "violet",
      question: "How often are new challenges added to FrontendPro?",
      answer: `FrontendPro is designed to occommodate developers of all skill levels. Our challenges range from beginner to advanced, so there's something for everyone.`,
    },
    {
      style: "pink",
      question:
        "What kind of frontend challenges can i expect to find on FrontendPro?",
      answer: `FrontendPro is designed to occommodate developers of all skill levels. Our challenges range from beginner to advanced, so there's something for everyone.`,
    },
    {
      style: "green",
      question: "Can I use libraries/frameworks on these projects?",
      answer: `FrontendPro is designed to occommodate developers of all skill levels. Our challenges range from beginner to advanced, so there's something for everyone.`,
    },
  ];

  return (
    <section className="homepage__accordion w-full py-20">
      <div className="container flex flex-col justify-center items-center w-full">
        <div className="accordion flex flex-col justify-center items-center drop-shadow-lg bg-[#FFFFFE] py-6 h-full w-full max-w-[640px] rounded-md mt-auto">
          <h1 className="text-center text-2xl text-black font-bold">
            Frequently Asked Questions
          </h1>
          <p className="text-center text-sm max-w-[250px] my-3">
            Answers to common questions about our frontend challenges website.
          </p>

          <div className="flex flex-col justify-center items-center h-full w-full px-10">
            {data.map((item, index) => {
              return (
                <AccordionBox
                  key={index}
                  style={item.style}
                  question={item.question}
                  answer={item.answer}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageAccordion;
