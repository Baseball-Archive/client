import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

interface Props {
  date: string;
  onPreviousDate: () => void;
  onNextDate: () => void;
}

const DateNavigator = ({ date, onPreviousDate, onNextDate }: Props) => {
  return (
    <div className="flex justify-center bg-gray-100 py-4 text-center text-2xl font-bold">
      <ChevronLeftIcon
        className="size-8 text-gray-500"
        onClick={onPreviousDate}
      />
      <h1>{date}</h1>
      <ChevronRightIcon className="size-8 text-gray-500" onClick={onNextDate} />
    </div>
  );
};
export default DateNavigator;
