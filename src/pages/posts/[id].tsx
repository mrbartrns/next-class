import { useRouter } from 'next/router';
import React from 'react';
import { Post as PostInterface } from '@/interfaces';
import { NextPageContext } from 'next';
import axios from 'axios';

interface Props {
  post: PostInterface;
}

// ANCHOR: context가 필요하다.
export const getServerSideProps = async (ctx: NextPageContext) => {
  const postId = ctx.query.id;
  const { data: post } = await axios.get<PostInterface>(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  );
  return {
    props: { post },
  };
};

const Post: React.FC<Props> = ({ post }) => {
  const router = useRouter();
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
