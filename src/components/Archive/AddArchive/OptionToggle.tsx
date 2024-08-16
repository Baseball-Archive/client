import { useState } from "react";
import { CheckCircleIcon, FaceSmileIcon } from "@heroicons/react/20/solid";

interface OptionToggleProps {
  firstOption: string;
  secondOption: string;
}

const OptionToggle = ({ firstOption, secondOption }: OptionToggleProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex items-center space-x-4">
      <div
        className="flex cursor-pointer items-center"
        onClick={() => handleOptionClick(firstOption)}
      >
        {selectedOption === firstOption ? (
          <CheckCircleIcon className="h-6 w-6 text-black" />
        ) : (
          <FaceSmileIcon className="h-6 w-6 text-gray-400" />
        )}
        <span className="ml-2">{firstOption}</span>
      </div>
      <div
        className="flex cursor-pointer items-center"
        onClick={() => handleOptionClick(secondOption)}
      >
        {selectedOption === secondOption ? (
          <CheckCircleIcon className="black h-6 w-6" />
        ) : (
          <FaceSmileIcon className="h-6 w-6 text-gray-400" />
        )}
        <span className="ml-2">{secondOption}</span>
      </div>
    </div>
  );
};

export default OptionToggle;
