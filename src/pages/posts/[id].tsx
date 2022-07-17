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
  try {
    const postId = ctx.query.id;
    const { data: post } = await axios.get<PostInterface>(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
    );
    return {
      props: { post },
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      // ANCHOR: not found시 404page로 자동으로 이동한다.
      return {
        notFound: true,
      };
    }
  }
  return {
    props: {},
  };
};

export default function Post({ post }: Props) {
  const router = useRouter();
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
