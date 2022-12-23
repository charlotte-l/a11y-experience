import React from 'react';
import ChapterLinks from './ChapterLinks';
import Footer from './Footer';
import Navigation from './Navigation';

type Props = {
  showChapters?: boolean,
  showToTop?: boolean,
  children: React.ReactNode;
};

const Layout = ({ showChapters, showToTop = true, children }: Props) => (
  <>
    <Navigation />
    <main id='main'>
      {children}
      {showChapters && <ChapterLinks />}
    </main>
    <Footer showToTop={showToTop} />
  </>
);

export default Layout;
