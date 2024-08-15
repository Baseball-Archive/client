import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import { CalendarDaysIcon } from "@heroicons/react/20/solid";
import "react-datepicker/dist/react-datepicker.css";

const PickDate = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [isOpen, setIsOpen] = useState<boolean>(false);

  interface CustomInputProps {
    value?: string;
    onClick?: () => void;
  }

  const CustomInput = forwardRef<HTMLDivElement, CustomInputProps>(
    ({ value, onClick }, ref) => (
      <div className="custom-input-container" ref={ref} onClick={onClick}>
        <input value={value} readOnly className="px-4 outline-none" />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer">
          <CalendarDaysIcon className="size-8" />
        </span>
      </div>
    ),
  );

  return (
    <div className="relative flex w-full items-center">
      <DatePicker
        className="w-full p-4"
        wrapperClassName="w-full"
        dateFormat="yyy.MM.dd"
        shouldCloseOnSelect
        minDate={new Date("2000-01-01")}
        maxDate={new Date()}
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        open={isOpen}
        onCalendarOpen={() => setIsOpen(true)}
        onCalendarClose={() => setIsOpen(false)}
        customInput={<CustomInput />}
      />
    </div>
  );
};

export default PickDate;
