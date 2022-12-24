import React from 'react';
import Container from './Container';

type PageSectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

const PageSection = ({ id, title, children }: PageSectionProps) => (
  <section
    aria-labelledby={id}
    css={`
      padding: var(--section-padding);
    `}
  >
    <Container>
      <h2 id={id}>{title}</h2>
      {children}
    </Container>
  </section>
);

export default PageSection;
