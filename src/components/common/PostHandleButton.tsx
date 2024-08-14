import React, { useState } from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";

interface PostHandleButtonProps {
  onEdit: () => void;
  onDelete: () => void;
}

const PostHandleButton = ({ onEdit, onDelete }: PostHandleButtonProps) => {
  const [isDropdownView, setDropdownView] = useState(false);
  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 200);
  };
  return (
    <div onBlur={handleBlurContainer}>
      <button onClick={handleClickContainer} className="active:text-gray-400">
        <EllipsisHorizontalIcon className="size-8" />
      </button>

      {isDropdownView && (
        <div className="z-1 absolute flex w-24 -translate-x-8 flex-col justify-center rounded-lg bg-white px-2 font-light shadow-lg">
          <button
            onClick={onEdit}
            className="rounded-t-lg border-b-2 px-3 py-2 text-sm"
          >
            수정하기
          </button>
          <button
            onClick={onDelete}
            className="rounded-b-lg px-3 py-2 text-sm text-[#FF0000]"
          >
            삭제하기
          </button>
        </div>
      )}
    </div>
  );
};

export default PostHandleButton;
