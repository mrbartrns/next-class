// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/**
 * ANCHOR: 기본적으로 서버에서 데이터를 보내주지만, 간단한 서버 api를 만들 수 있다.
 * ex) third party api 연결
 */
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: 'John Doe' });
}
