import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import dayjs from 'dayjs';

interface Props {
  date: string;
}

const DateNavigator = ({ date }: Props) => {
  return (
    <div className="flex justify-center bg-gray-100 py-4 text-center text-2xl font-bold">
      <ChevronLeftIcon
        className="size-8 text-gray-500"
        onClick={() => dayjs(date).add(1, 'day')}
      />
      <h1>{date}</h1>
      <ChevronRightIcon className="size-8 text-gray-500" />
    </div>
  );
};
export default DateNavigator;
