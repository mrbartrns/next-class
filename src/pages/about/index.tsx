import React from 'react';
import Link from 'next/link';
import * as S from './styles';

const About: React.FC = () => {
  return (
    <div>
      About
      <S.Box />
      <Link href="/">to home</Link>
    </div>
  );
};

export default About;
