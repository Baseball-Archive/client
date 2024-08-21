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
    <div className="flex justify-center bg-white pt-4">
      <form
        onSubmit={handleSubmit}
        className="flex w-full overflow-hidden rounded-md border"
      >
        <input
          type="text"
          value={comment}
          onChange={handleInputChange}
          placeholder="댓글을 입력하세요"
          className="flex-grow border-none pl-4 focus:outline-none"
        />
        <button
          type="submit"
          className="border-none px-4 py-2 font-bold text-black focus:outline-none"
          style={{ minWidth: '60px' }}
        >
          등록
        </button>
      </form>
    </div>
  );
};

export default AddComment;
