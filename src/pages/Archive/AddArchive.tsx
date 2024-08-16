import ArchiveInfo from "../../components/Archive/AddArchive/ArchiveInfo";

const AddArchive = () => {
  return (
    <div className="container mb-6 flex justify-center overflow-auto bg-white">
      <div className="flex w-full max-w-md flex-col overflow-auto">
        <ArchiveInfo />
      </div>
    </div>
  );
};

export default AddArchive;
