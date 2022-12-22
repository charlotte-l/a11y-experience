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
          border-top: 1px solid var(--link-text);
          margin-top: 2rem;
        `}
      >
        <Link
          href="https://www.linkedin.com/in/charlotte-cameron-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Charlotte
        </Link>
        <Link
          href="https://github.com/charlotte-l/a11y-experience/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </Link>
      </div>
    </Container>
  </footer>
);

export default Footer;
