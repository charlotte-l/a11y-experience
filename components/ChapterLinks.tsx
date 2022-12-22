import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import navLinks from '../settings/navigation';
import Container from './Container';

const ChaptersWrapper = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const PrevLink = styled(Link)`
  margin-right: auto;
`;

const NextLink = styled(Link)`
  margin-left: auto;
`;

const navLinkCount = navLinks.length;

const ChapterLinks = (): React.ReactElement | null => {
  const router = useRouter();
  const currentPageIdx = navLinks.findIndex(
    (link) => link.path === router.pathname,
  );

  if (currentPageIdx === -1) return null;

  let hasPrev = true;
  let hasNext = true;
  let prev;
  let next;

  if (currentPageIdx === 0) hasPrev = false;
  if (currentPageIdx === navLinkCount - 1) hasNext = false;

  if (hasPrev) prev = navLinks[currentPageIdx - 1];
  if (hasNext) next = navLinks[currentPageIdx + 1];

  return (
    <ChaptersWrapper>
      {hasPrev && (
        <PrevLink href={{ pathname: prev?.path }}>
          &laquo; {prev?.chapterTitle}
        </PrevLink>
      )}
      {hasNext && (
        <NextLink href={{ pathname: next?.path }}>
          {next?.chapterTitle} &raquo;
        </NextLink>
      )}
    </ChaptersWrapper>
  );
};

export default ChapterLinks;
