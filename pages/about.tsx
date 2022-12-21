import Layout from '../components/Layout';
import Container from '../components/Container';

export default function About() {
  return (
    <>
      <Layout>
        <Container cover>
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tortor nibh, finibus at auctor non, facilisis a ligula. Suspendisse
            sapien odio, aliquet ut suscipit a, volutpat et urna. Mauris et
            libero vel nulla bibendum tristique. Quisque ante tellus, dapibus
            nec tellus a, venenatis volutpat ante. Aenean varius ante eget
            tristique aliquam. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Suspendisse molestie semper magna ac gravida.
            Quisque mollis urna risus, at aliquam felis commodo et.
          </p>
          <p>
            Quisque posuere augue eu lacus suscipit efficitur. Phasellus vel est
            dolor. Donec maximus ac diam eu feugiat. Aenean consequat orci sit
            amet tincidunt aliquam. Proin eu lacus a lectus venenatis malesuada
            ut vel justo. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>

          <h2>Disclaimer</h2>
          <p>
            The simulations on this site are not medically/scientifically
            accurate. Impairment simulations cannot convey what it is really
            like to live with capability loss on an everyday basis.
          </p>
        </Container>
      </Layout>
    </>
  );
}
