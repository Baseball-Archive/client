import { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { CalendarDaysIcon } from '@heroicons/react/20/solid';
import 'react-datepicker/dist/react-datepicker.css';

interface PickDateProps {
  selectedDate: Date | null;
  handleDate: (date: Date | null) => void;
}
interface ShowInputDateProps {
  value?: string;
  onClick?: () => void;
}
const ShowInputDate = forwardRef<HTMLDivElement, ShowInputDateProps>(
  ({ value, onClick }, ref) => (
    <div className="px-4" ref={ref} onClick={onClick}>
      <input value={value} readOnly className="w-11/12 outline-none" />
      <span className="absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer">
        <CalendarDaysIcon className="size-4" />
      </span>
    </div>
  ),
);

const PickDate = ({ selectedDate, handleDate }: PickDateProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative flex w-full items-center">
      <DatePicker
        showPopperArrow={false}
        className="w-full"
        wrapperClassName="w-full"
        dateFormat="yyy/MM/dd"
        shouldCloseOnSelect
        minDate={new Date('2000-01-01')}
        maxDate={new Date()}
        selected={selectedDate}
        onChange={handleDate}
        open={isOpen}
        onCalendarOpen={() => setIsOpen(true)}
        onCalendarClose={() => setIsOpen(false)}
        customInput={<ShowInputDate />}
        popperPlacement="bottom-end"
      />
    </div>
  );
};

export default PickDate;
