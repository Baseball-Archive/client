import { ReactNode } from 'react';
interface InfoSectionProps {
  label: string;
  half?: boolean;
  children: ReactNode;
}

const InfoSection = ({ label, children, half }: InfoSectionProps) => {
  return (
    <div className={half ? '0 flex w-1/2 flex-col' : 'flex flex-col'}>
      <label className="text-base">{label}</label>
      <div className="mb-4 flex h-12 items-center justify-center rounded-[4px] border">
        {children}
      </div>
    </div>
  );
};

export default InfoSection;
