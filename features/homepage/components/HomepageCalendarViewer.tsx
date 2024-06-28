import CalendarView from "@/features/common/components/CalendarView";
import Image from "next/image";

const HomepageCalendarViewer = () => {
  return (
    <section className="homepage__calendar--viewer w-full h-full py-20 relative">
      <div className="container flex justify-center items-center w-full h-full">
        <Image src="/images/calendar-img.jpg" alt="" fill draggable={false} />

        <CalendarView />
      </div>
    </section>
  );
};

export default HomepageCalendarViewer;
