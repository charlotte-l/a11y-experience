import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import SEO from '../components/Seo';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const baseUrl = process.env.NODE_ENV === 'production'
    ? 'https://www.google.com'
    : 'http://localhost:3000';
  const canonical = baseUrl + (router.asPath === '/' ? '' : router.asPath);

  return (
    <>
      <SEO canonical={canonical} />
      <Component {...pageProps} canonical={canonical} />
    </>
  );
}

export default App;
