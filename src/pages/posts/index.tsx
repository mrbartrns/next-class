import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import { Post } from '@/interfaces';

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
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
