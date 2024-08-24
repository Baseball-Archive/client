import { ReactNode } from 'react';

interface PostInfoSectionProps {
  label: string;
  name: string;
  children: ReactNode;
}

const PostInfoSection = ({ label, children, name }: PostInfoSectionProps) => {
  return (
    <fieldset className="flex flex-col pb-6">
      <label htmlFor={name}>{label}</label>
      {children}
    </fieldset>
  );
};

export default PostInfoSection;
