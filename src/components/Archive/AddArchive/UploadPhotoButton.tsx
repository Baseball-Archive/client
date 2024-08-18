import { CloudArrowUpIcon } from "@heroicons/react/20/solid";

const UploadPhotoButton = () => {
  return (
    <button
      type="button"
      className="relative mt-4 flex h-16 w-full items-center justify-center rounded-[4px] border p-0 text-gray-400"
    >
      사진 올리기 <CloudArrowUpIcon className="ml-3 size-8" />
    </button>
  );
};

export default UploadPhotoButton;
