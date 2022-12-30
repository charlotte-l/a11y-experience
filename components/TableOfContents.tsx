import Link from 'next/link';
import styled from 'styled-components';

type Heading = {
  label: string;
  anchor: string;
};

type TableOfContentsProps = {
  title: string;
  headings: Array<Heading>;
};

const TocHeader = styled.header`
  display: block;
  font-size: 1.17rem;
  margin-block-start: 3rem;
  margin-block-end: 0.75rem;
  font-weight: bold;
  font-family: Cambria, 'Hoefler Text', Utopia, 'Liberation Serif',
    'Nimbus Roman No9 L Regular', Times, 'Times New Roman', serif;
  line-height: 1.2;
`;

const TableOfContents = ({ title, headings }: TableOfContentsProps) => (
  <nav aria-labelledby="toc-header">
    <TocHeader id="toc-header">{title}</TocHeader>
    <ul>
      {headings.map((heading) => (
        <li key={heading.label}>
          <Link href={`#${heading.anchor}`}>
            {heading.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default TableOfContents;
