import React from 'react';
import Footer from './Footer';
import Navigation from './Navigation';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Navigation />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
