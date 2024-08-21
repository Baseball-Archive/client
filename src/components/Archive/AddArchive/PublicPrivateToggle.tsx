import { useState } from 'react';
import { CheckCircleIcon, FaceSmileIcon } from '@heroicons/react/20/solid';

interface PublicPrivateToggleProps {
  isPublic: boolean | null;
  handleOptionClick: (option: boolean | null) => void;
}

const PublicPrivateToggle = ({
  isPublic,
  handleOptionClick,
}: PublicPrivateToggleProps) => {
  return (
    <div className="flex items-center space-x-4">
      <div
        className="flex cursor-pointer items-center"
        onClick={() => handleOptionClick(true)}
      >
        {isPublic === true ? (
          <CheckCircleIcon className="h-6 w-6 text-black" />
        ) : (
          <FaceSmileIcon className="h-6 w-6 text-gray-400" />
        )}
        <span className="ml-2">공개</span>
      </div>
      <div
        className="flex cursor-pointer items-center"
        onClick={() => handleOptionClick(false)}
      >
        {isPublic === false ? (
          <CheckCircleIcon className="black h-6 w-6" />
        ) : (
          <FaceSmileIcon className="h-6 w-6 text-gray-400" />
        )}
        <span className="ml-2">비공개</span>
      </div>
    </div>
  );
};

export default PublicPrivateToggle;
