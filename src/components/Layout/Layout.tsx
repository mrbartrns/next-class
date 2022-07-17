import React from 'react';
import type { NextPage } from 'next';
import Navbar from '@components/Navbar';

interface Props {
  children: React.ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
