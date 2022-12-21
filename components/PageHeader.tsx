import React from 'react';
import Container from './Container';

type PageHeaderProps = {
  id: string;
  title: string;
  description: string;
};

const PageHeader = ({ id, title, description }: PageHeaderProps) => (
  <header aria-labelledby={id}>
    <Container
      css={`
        padding-top: 5rem;
      `}
    >
      <h1 id={id}>{title}</h1>
      <p>{description}</p>
    </Container>
  </header>
);

export default PageHeader;
