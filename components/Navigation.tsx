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
`;

const Navigation = () => {
  const router = useRouter();

  return (
    <nav>
      <Container>
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
