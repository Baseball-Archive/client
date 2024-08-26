import PostInfo from '../../components/Community/AddPost/PostInfo';

const AddPost = () => {
  return (
    <div className="container mb-6 flex justify-center overflow-auto bg-white">
      <div className="flex w-full max-w-md flex-col overflow-auto">
        <PostInfo />
      </div>
    </div>
  );
};

export default AddPost;
