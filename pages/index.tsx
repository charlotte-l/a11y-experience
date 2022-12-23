import Link from 'next/link';
import Layout from '../components/Layout';
import Container from '../components/Container';

export default function Home() {
  return (
    <>
      <Layout showToTop={false}>
        <Container
          cover
          css={`
            text-align: center;
          `}
        >
          <h1>Web accessibility changes lives</h1>
          <p>
            The human experience is diverse; accessibility is for all.<br/>The Web
            is &ndash; and always was &ndash; designed for <strong>everyone</strong>.
          </p>
          <Link href="/intro">Start exploring</Link>
        </Container>
      </Layout>
    </>
  );
}
