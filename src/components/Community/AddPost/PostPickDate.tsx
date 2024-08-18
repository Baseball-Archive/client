import { useState } from "react";
import DatePicker from "react-datepicker";
import { CalendarDaysIcon } from "@heroicons/react/20/solid";
import "react-datepicker/dist/react-datepicker.css";

interface PostPickDateProps {
  onSelectDate: (date: string) => void;
}

const PostPickDate: React.FC<PostPickDateProps> = ({ onSelectDate }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      onSelectDate(date.toISOString().split("T")[0]);
    }
  };

  return (
    <div className="relative flex w-full items-center">
      <DatePicker
        className="w-full p-4"
        wrapperClassName="w-full"
        dateFormat="yyyy.MM.dd"
        shouldCloseOnSelect
        minDate={new Date("2000-01-01")}
        maxDate={new Date()}
        selected={selectedDate}
        onChange={handleDateChange}
        open={isOpen}
        onCalendarOpen={() => setIsOpen(true)}
        onCalendarClose={() => setIsOpen(false)}
        customInput={
          <div className="custom-input-container flex items-center cursor-pointer">
            <input
              value={selectedDate ? selectedDate.toISOString().split("T")[0] : ""}
              readOnly
              className="px-4 outline-none w-full"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 transform">
              <CalendarDaysIcon className="h-6 w-6 text-gray-500" />
            </span>
          </div>
        }
      />
    </div>
  );
};

export default PostPickDate;

