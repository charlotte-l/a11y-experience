import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import settings from '../settings';
import navLinks from '../settings/navigation';
import Container from './Container';

const NavBar = styled.ul`
  display: flex;
  flex-direction: row;
  min-height: var(--nav-height);
  gap: 2rem;
  align-items: center;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0;
  list-style: none;

  li {
    margin-bottom: 0;
  }
`;

const SkipLink = styled(Link)`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  &:focus-visible {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    width: auto;
    outline: none;
    position: absolute;
    top: 1.25rem;
    left: 2rem;
    z-index: 10;
  }
`;

const Navigation = () => {
  const router = useRouter();

  return (
    <nav className='site-nav'>
      <Container>
        <SkipLink className="skip-link" href='#main'>Skip to content</SkipLink>
        <NavBar className="navbar-nav">
          <li
            className="nav-item nav-brand"
            css={`
              margin-right: auto;
            `}
          >
            <Link href="/">{settings?.meta?.siteName}</Link>
          </li>
          {navLinks?.map((link) => {
            const isActive = link.path === router.pathname;

            return (
              <li className="nav-item" key={link.path}>
                <Link
                  href={link.path}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  aria-current={isActive ? 'true' : 'false'}
                >
                  {link.navTitle}
                </Link>
              </li>
            );
          })}
        </NavBar>
      </Container>
    </nav>
  );
};

export default Navigation;
