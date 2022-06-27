import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import { Post } from '@/interfaces';

/**
 * ANCHOR: 서버로부터 데이터를 받아와 템플릿을 구성할 경우
 * 초기 로딩 시간이 훨씬 빠르다
 */
export const getServerSideProps = async () => {
  const { data: posts } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts',
  );
  return {
    props: { posts },
  };
};

interface Props {
  posts: Post[];
}

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
