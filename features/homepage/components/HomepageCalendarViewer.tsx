import CalendarView from "@/features/common/components/CalendarView";
import Image from "next/image";

const HomepageCalendarViewer = () => {
  return (
    <section className="homepage__calendar--viewer">
      <div className="container flex justify-center items-center pt-20">
        <Image
          src="/images/calendar-img.jpg"
          alt=""
          fill
          draggable={false}
          style={{
            objectFit: "cover",
            opacity: 0.5,
            filter: "grayscale(100%)",
          }}
        />

        <CalendarView />
      </div>
    </section>
  );
};

export default HomepageCalendarViewer;
