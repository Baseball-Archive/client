import { PhotoIcon } from '@heroicons/react/24/outline';
import { useRef, useState } from 'react';
import { uploadImage } from '../../../apis/uploadImage';
import { auth } from '../../../service/firebase';
import { showToast } from '../../common/Toast';

interface EditPhotoButtonProps {
  picUrl: string;
  handlePicUrl: (url: string) => void;
}
const EditPhotoButton = ({ picUrl, handlePicUrl }: EditPhotoButtonProps) => {
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
      showToast('선택된 파일이 없습니다.', 'error');
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
        {picUrl ? (
          <span className="ml-2">사진 수정</span>
        ) : (
          <span className="ml-2">사진 업로드</span>
        )}
      </div>
      {fileName && (
        <div className="mt-2 text-sm text-gray-600">
          업로드된 파일: {fileName}
        </div>
      )}
    </>
  );
};

export default EditPhotoButton;
