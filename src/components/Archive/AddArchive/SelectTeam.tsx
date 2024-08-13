import React, { useState } from "react";
import Badge from "../../common/Badge";
type SelectTeamProps = "our" | "opponent" | null;
const SelectTeam = () => {
  const [isDropdownView, setDropdownView] = useState<SelectTeamProps>(null);
  const handleClickContainer = (select: SelectTeamProps) => {
    setDropdownView((prev) => (prev == select ? null : select));
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(null);
    }, 200);
  };

  return (
    <div className="relative flex h-full w-full" onBlur={handleBlurContainer}>
      <div className="flex w-full items-center justify-start gap-4 px-4 text-lg text-gray-400">
        <button onClick={() => handleClickContainer("our")}>
          <Badge scheme="default" />
        </button>
        vs
        <button onClick={() => handleClickContainer("opponent")}>
          <Badge scheme="default" />
        </button>
      </div>

      {isDropdownView == "our" && (
        <div className="absolute left-1/2 top-full flex h-12 w-full -translate-x-1/2 items-center justify-center rounded-[4px] bg-black">
          adsads
        </div>
      )}
      {isDropdownView == "opponent" && (
        <div className="absolute left-1/2 top-full flex h-12 w-full -translate-x-1/2 items-center justify-center rounded-[4px] bg-slate-500">
          opponent
        </div>
      )}
    </div>
  );
};
export default SelectTeam;
