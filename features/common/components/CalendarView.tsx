import IconNext from "@/features/icons/components/IconNext";
import IconPrev from "@/features/icons/components/IconPrev";
import classNames from "classnames";
import { useEffect, useState } from "react";

const CalendarView = () => {
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay();
  const lastDayOfMonth = new Date(selectedYear, selectedMonth + 1, 0).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const prevMonthDays = Array.from(
    { length: firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1 },
    (_, i) => {
      const prevMonthLastDay = new Date(
        selectedYear,
        selectedMonth,
        0
      ).getDate();
      return (
        prevMonthLastDay - (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1) + i
      );
    }
  );

  const nextMonthDays = Array.from(
    { length: lastDayOfMonth === 0 ? 0 : 7 - lastDayOfMonth },
    (_, i) => i + 1
  );

  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function handleSelectedDay(day: number) {
    setSelectedDay(day);
  }

  function handlePrevMonth() {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear((prevState) => prevState - 1);
    } else {
      setSelectedMonth((prevState) => prevState - 1);
    }
  }

  function handleNextMonth() {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear((nextState) => nextState + 1);
    } else {
      setSelectedMonth((nextState) => nextState + 1);
    }
  }

  return (
    <div className="calendar__view relative w-full max-w-[430px] h-full bg-[#FBFAFF] p-8 rounded-lg shadow-xl">
      <div className="top flex items-center text-2xl mb-8">
        <p className="font-bold mr-2 ">{monthNames[selectedMonth]}</p>
        <p className="font-bold">{selectedYear}</p>

        <button
          className="ml-auto text mr-5"
          type="button"
          onClick={handlePrevMonth}
        >
          <IconPrev />
        </button>

        <button type="button" onClick={handleNextMonth}>
          <IconNext />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-3 sm:gap-5">
        {weekdays.map((day, index) => (
          <div
            key={index}
            className="flex items-center justify-center font-bold mb-1 sm:mb-3"
          >
            {day}
          </div>
        ))}

        {prevMonthDays.map((day) => (
          <div
            key={`prev${day}`}
            className="flex items-center justify-center text-gray-400 mb-0 sm:mb-2"
          >
            {day}
          </div>
        ))}

        {days.map((day) => (
          <button
            key={day}
            type="button"
            onClick={() => handleSelectedDay(day)}
            className={classNames(
              "flex size-6 sm:size-8 items-center justify-center mb-0 sm:mb-2",
              {
                "bg-[#7049F5] text-white rounded-full": day === selectedDay,
              }
            )}
          >
            {day}
          </button>
        ))}

        {nextMonthDays.map((day) => (
          <div
            key={`next${day}`}
            className="flex items-center justify-center text-gray-400 mb-2"
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
