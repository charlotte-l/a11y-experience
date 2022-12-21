import Link from 'next/link';
import Layout from '../components/Layout';
import Container from '../components/Container';

export default function Home() {
  return (
    <>
      <Layout>
        <Container
          cover
          css={`
            text-align: center;
          `}
        >
          <h1>Inclusive design changes lives</h1>
          <p>The human experience is diverse; accessibility is for everyone.</p>
          <Link href="/visual-impairment">Start exploring</Link>
        </Container>
      </Layout>
    </>
  );
}
