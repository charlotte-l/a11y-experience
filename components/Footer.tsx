import Link from 'next/link';
import Container from './Container';

const Footer = () => (
  <footer>
    <Container>
      <div
        css={`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          min-height: var(--footer-height);
        `}
      >
        <Link href="/about">About this site</Link>
        <Link
          href="https://github.com/charlotte-l"
          target="_blank"
          rel="noopener noreferrer"
        >
          @charlotte-l
        </Link>
      </div>
    </Container>
  </footer>
);

export default Footer;
