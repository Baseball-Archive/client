import { PhotoIcon } from '@heroicons/react/24/outline';
import { useRef, useState } from 'react';
import { uploadImage } from '../../../apis/uploadImage';
import { auth } from '../../../service/firebase';

interface UploadPhotoButtonProps {
  handlePicUrl: (url: string) => void;
}
const UploadPhotoButton = ({ handlePicUrl }: UploadPhotoButtonProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  const uploadImageAndGetUrl = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files;

    if (!file) {
      window.alert('선택된 파일이 없습니다.');
      console.error('선택된 파일이 없습니다.');
      return;
    }
    try {
      if (auth.currentUser) {
        const formData = new FormData();
        formData.append('profileImage', file[0]);
        const result = await uploadImage(formData);
        handlePicUrl(result.fileUrl);
        setFileName(file[0].name);
        console.log(result.fileUrl);
      } else {
        console.error('토큰이 없습니다.');
      }
    } catch (err) {
      console.error(err);
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
        {fileName && <span className="ml-2">{fileName}</span>}
      </div>
    </>
  );
};

export default UploadPhotoButton;
