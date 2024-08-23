import { PhotoIcon } from '@heroicons/react/24/outline';
import { useRef, useState } from 'react';
import { uploadImage } from '../../../apis/uploadImage';

interface UploadPhotoButtonProps {
  handlePicUrl: (url: string) => void;
}
const UploadPhotoButton = ({ handlePicUrl }: UploadPhotoButtonProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const uploadImageAndGetUrl = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      try {
        const response = await uploadImage(file);
        handlePicUrl(response.fileUrl);
      } catch (error) {
        //TODO: 에러 처리
      }
    }
  };
  return (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={uploadImageAndGetUrl}
        ref={fileInputRef}
        className="hidden"
      />
      <div className="mt-4">
        <p className="">사진 첨부</p>
      </div>
      <div
        className="flex h-12 w-full items-center self-start rounded-[4px] border px-4 text-gray-400"
        onClick={handleButtonClick}
      >
        <PhotoIcon className="size-8" />
      </div>
    </>
  );
};

export default UploadPhotoButton;
