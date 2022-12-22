import React from 'react';
import ChapterLinks from './ChapterLinks';
import Footer from './Footer';
import Navigation from './Navigation';

type Props = {
  showChapters?: boolean,
  children: React.ReactNode;
};

const Layout = ({ showChapters, children }: Props) => (
  <>
    <Navigation />
    <main>
      {children}
      {showChapters && <ChapterLinks />}
    </main>
    <Footer />
  </>
);

export default Layout;
