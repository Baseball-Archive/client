import { useState } from "react";
import ReviewSection from "./ReviewSection";
import ArchiveHeader from "./ArchiveHeader";
import { ArchiveProps } from "../../types/ArchiveProps";

const Archive = (props: ArchiveProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-6 flex justify-center overflow-hidden bg-white">
      <div className="w-full">
        <ArchiveHeader
          userId={props.userId}
          weather={props.weather}
          profileImage={props.photo}
        />
        <div className="w-full flex-col items-center">
          <img
            src={props.photo}
            className="mb-4 aspect-square w-full object-cover"
          />
          <ReviewSection
            review={props.review}
            result={props.result}
            scheduleId={props.scheduleId}
            isExpanded={isExpanded}
            onToggleExpand={() => setIsExpanded((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  );
};

export default Archive;
