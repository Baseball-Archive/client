import { ReactNode } from "react";
interface InfoSectionProps {
  label: string;
  children: ReactNode;
}

const InfoSection = ({ label, children }: InfoSectionProps) => {
  return (
    <div className="mt-2 flex flex-col">
      <label className="text-base">{label}</label>
      <div className="flex h-12 items-center justify-center rounded-[4px] border text-lg">
        {children}
      </div>
    </div>
  );
};

export default InfoSection;
