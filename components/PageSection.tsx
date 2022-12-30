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
      margin-top: var(--section-padding);
    `}
  >
    <Container>
      <h2 id={id} css={'scroll-margin-block: var(--section-padding)'}>
        {title}
      </h2>
      {children}
    </Container>
  </section>
);

export default PageSection;
