import React, { ReactNode } from "react";
interface InfoSectionProps {
  label: string;
  children: ReactNode;
}

const InfoSection: React.FC<InfoSectionProps> = ({ label, children }) => {
  return (
    <div className="mb-4 flex flex-row">
      <label className="mr-2 text-sm">{label}</label>
      {children}
    </div>
  );
};

export default InfoSection;
