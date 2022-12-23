import Link from 'next/link';
import styled, { css } from 'styled-components';
import Container from './Container';
import GitHub from './icons/GitHub';
import LinkedIn from './icons/LinkedIn';

const ICON_SIZE = 24;
const ICON_FILL = 'var(--link-text)';
const ICON_HOVER_FILL = 'var(--link-bg--dark)';

const IconLink = css`
  &:hover {
    background-color: unset;
  }
`;

const FooterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: var(--footer-height);
  border-top: 1px solid var(--link-text);
  margin-top: var(--footer-margin);
`;

const FooterIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-left: auto;
`;

const Footer = ({ showToTop }: { showToTop: boolean }) => (
  <footer>
    <Container>
      <FooterRow>
        {showToTop && <Link href="#"><span aria-hidden="true">&uarr;</span> Back to top</Link>}
        <FooterIcons>
          <Link
            href="https://www.linkedin.com/in/charlotte-cameron-dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Charlotte's LinkedIn"
            css={IconLink}
          >
            <LinkedIn
              width={ICON_SIZE}
              height={ICON_SIZE}
              fill={ICON_FILL}
              hoverFill={ICON_HOVER_FILL}
            />
          </Link>
          <Link
            href="https://github.com/charlotte-l/a11y-experience/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source on GitHub"
            css={IconLink}
          >
            <GitHub
              width={ICON_SIZE}
              height={ICON_SIZE}
              fill={ICON_FILL}
              hoverFill={ICON_HOVER_FILL}
            />
          </Link>
        </FooterIcons>
      </FooterRow>
    </Container>
  </footer>
);

export default Footer;
