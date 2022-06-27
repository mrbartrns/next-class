import { useRouter } from 'next/router';
import React from 'react';

const Post: React.FC = () => {
  const router = useRouter();
  return (
    <div>
      Post {router.query.id}
      <button
        onClick={() => {
          router.push('/about');
        }}
        type="button"
      >
        About으로 이동하기
      </button>
    </div>
  );
};

export default Post;
