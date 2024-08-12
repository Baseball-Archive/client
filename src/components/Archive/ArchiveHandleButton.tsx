import React, { useState } from "react";

const ArchiveHandleButton = () => {
  const [isDropdownView, setDropdownView] = useState(false);
  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 200);
  };
  const handleDelete = () => {
    if (window.confirm("삭제 하시겠습니까?")) {
      alert("삭제 되었습니다.");
    }
  };
  const handleEdit = () => {
    if (window.confirm("수정 하시겠습니까?")) {
      alert("수정 되었습니다.");
    }
  };
  return (
    <div className="" onBlur={handleBlurContainer}>
      <button
        onClick={handleClickContainer}
        className="px-3 text-4xl active:text-gray-400"
      >
        ···
      </button>

      {isDropdownView && (
        <div className="z-1 absolute flex flex-col rounded-lg bg-white shadow-lg">
          <button
            onClick={handleEdit}
            className="rounded-t-lg border-b-2 px-3 py-1 hover:bg-gray-200"
          >
            수정
          </button>
          <button
            onClick={handleDelete}
            className="rounded-b-lg px-3 py-1 hover:bg-gray-200"
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default ArchiveHandleButton;
