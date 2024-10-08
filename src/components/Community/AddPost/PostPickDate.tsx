import { CalendarDaysIcon } from '@heroicons/react/20/solid';
import React, { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

interface PostPickDateProps {
  onSelectDate: (date: string) => void;
  value?: string;
}

const PostPickDate = forwardRef<HTMLInputElement, PostPickDateProps>(
  ({ onSelectDate, value }, ref) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(
      value ? new Date(value) : new Date(),
    );
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleDateChange = (date: Date | null) => {
      setSelectedDate(date);
      if (date) {
        const formattedDate = date.toISOString().split('T')[0];
        onSelectDate(formattedDate);
      }
    };

    return (
      <DatePicker
        className="w-full rounded border border-[#A9A9A9] p-4"
        wrapperClassName="w-full"
        id="date"
        dateFormat="yyyy.MM.dd"
        shouldCloseOnSelect
        minDate={new Date('2024-03-09')}
        maxDate={new Date('2024-09-30')}
        selected={selectedDate}
        onChange={handleDateChange}
        open={isOpen}
        onCalendarOpen={() => setIsOpen(true)}
        onCalendarClose={() => setIsOpen(false)}
        customInput={
          <div className="custom-input-container flex cursor-pointer items-center">
            <input
              ref={ref}
              value={
                selectedDate ? selectedDate.toISOString().split('T')[0] : ''
              }
              readOnly
              className="w-full px-4 outline-none"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 transform">
              <CalendarDaysIcon className="h-6 w-6 text-gray-500" />
            </span>
          </div>
        }
      />
    );
  },
);

PostPickDate.displayName = 'PostPickDate';

export default PostPickDate;
