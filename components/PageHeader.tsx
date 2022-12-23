import React from 'react';
import Container from './Container';

type PageHeaderProps = {
  id: string;
  title: string;
  children?: React.ReactNode;
};

const PageHeader = ({ id, title, children }: PageHeaderProps) => (
  <header
    aria-labelledby={id}
    css={`
      margin-top: var(--header-margin);
    `}
  >
    <Container>
      <h1 id={id}>{title}</h1>
      {children}
    </Container>
  </header>
);

export default PageHeader;
