import CalendarView from "@/features/common/components/CalendarView";
import Image from "next/image";

const HomepageCalendarViewer = () => {
  return (
    <section className="homepage__calendar--viewer w-full py-20 bg-green-950">
      <div className="container flex justify-center items-center">
        <CalendarView />
      </div>
    </section>
  );
};

export default HomepageCalendarViewer;
