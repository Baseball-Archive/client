import React, { useState } from 'react';
// import { db, collection, addDoc } from './firebase';

const AddComment = () => {
  const [comment, setComment] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      try {
        // await addDoc(collection(db, 'comments'), {
        //   text: comment,
        //   timestamp: new Date()
        // });
        console.log('Comment submitted:', comment);
        setComment('');
      } catch (error) {
        console.error('Error adding comment: ', error);
      }
    }
  };

  return (
    <div className="ml-6 mr-6 pt-4 flex justify-center bg-white">
      <form onSubmit={handleSubmit} className="w-full max-w-lg flex border rounded-md overflow-hidden">
        <input
          type="text"
          value={comment}
          onChange={handleInputChange}
          placeholder="댓글을 입력하세요"
          className="flex-grow pl-4 border-none focus:outline-none"
        />
        <button
          type="submit"
          className="text-black font-bold py-2 px-4 border-none focus:outline-none"
          style={{ minWidth: "60px" }}
        >
          등록
        </button>
      </form>
    </div>
  );
};

export default AddComment;
