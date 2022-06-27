import { NextApiRequest, NextApiResponse } from 'next';
import { TestUser } from '@/interfaces';

interface IHandler extends TestUser {
  query: {
    [key: string]: unknown;
  };
}

interface Error {
  error: string;
}

// handler는 api 폴더 내부에서만 동작하는 Node.js like 함수이다.
// api 폴더 역시 폴더 라우팅이 적용되고, [id] 동적 path가 적용된다.
// 클라이언트 사이드에서 http://localhost:3000/api/posts/[id] 형식으로 api 요청이 가능하다.
// getServersideProps에서
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IHandler | Error>,
) {
  // TODO: async / await 처리 가능
  try {
    res.status(200).json({
      name: 'John',
      email: 'John@doe.com',
      query: req.query,
    });
  } catch (e) {
    res.status(404).send({ error: 'not found!' });
  }
}
