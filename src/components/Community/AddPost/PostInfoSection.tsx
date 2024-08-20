import { ReactNode } from "react";

interface PostInfoSectionProps {
  label: string;
  children: ReactNode;
}

const PostInfoSection = ({ label, children }: PostInfoSectionProps) => {
  return (
    <div className="mt-2 flex flex-col">
      <label className="text-base">{label}</label>
      <div className="mb-4 flex h-12 items-center justify-center rounded-[4px] border text-lg">
        {children}
      </div>
    </div>
  );
};

export default PostInfoSection;