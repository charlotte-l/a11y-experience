import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import RadioControl from '../../../controls/RadioControl';
import Playground from '../../../Playground';
import Overlay from '../Overlay';
import ToggleControl from '../../../controls/ToggleControl';
import Container from '../../../Container';
import highContrastStyles from './highContrast';
import PlaygroundContext from '../../../PlaygroundContext';

const StyledContainer = styled(Container)<{ highContrast: boolean }>`
  padding: 1rem 1rem 3rem;
  max-height: 400px;
  overflow: auto;

  ${(props) => props.highContrast && highContrastStyles}}
`;

const DemoNav = styled.nav`
  display: flex;
  justify-content: flex-end;

  span {
    margin-right: auto;
    font-weight: bold;
  }

  & > ul {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    padding-inline-start: 0;
  }
`;

const H1 = styled.span`
  display: block;
  font-size: 2rem;
  margin-bottom: 0.75rem;
`;

const H2 = styled.span`
  display: block;
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

const H3 = styled.span`
  display: block;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const VisualAcuity = () => (
  <Playground
    id="visual-acuity-demo"
    initialValues={{
      blurriness: 0,
      enabled: false,
    }}
    controls={[
      <RadioControl
        key="blurriness"
        id="blurriness"
        label="Blurriness"
        options={[
          { label: '20/20', value: 0 },
          { label: '20/40', value: 1.25 },
          { label: '20/100', value: 2.5 },
          { label: '20/160', value: 5 },
        ]}
      />,
      <ToggleControl
        key="enabled"
        id="enabled"
        label="Enable user styles"
      />,
    ]}
  >
    <PlaygroundContext.Consumer>
      {(ctx) => (
        <StyledContainer highContrast={ctx.state.enabled || false}>
          <Overlay type="blur">
            <DemoNav>
              <span>
                <Link href="#">Otterly Amazing</Link>
              </span>
              <ul>
                <li>
                  <Link href="#">About</Link>
                </li>
                <li>
                  <Link href="#">Our Otters</Link>
                </li>
                <li>
                  <Link href="#">Latest News</Link>
                </li>
                <li>
                  <Link href="#">Contact</Link>
                </li>
              </ul>
            </DemoNav>
            <H1 className="h1">All About Otters</H1>
            <p>
              Otters can be found on every continent except Australia and
              Antarctica. They are small and furry. They have long bodies, long
              tails and dense fur. There are{' '}
              <Link
                href="https://en.wikipedia.org/wiki/Otter#Species"
                target="_blank"
                rel="noopener nofollow"
              >
                13 species of otter
              </Link>{' '}
              in total.
            </p>
            <Image
              src="/otter.jpg"
              alt="A river otter lying down resting it's head on a tree stump"
              width={640}
              height={352}
            />
            <H2 className="h2">Habitat</H2>
            <p>
              There is only one species of otter, but otters live in two
              distinct habitats: by the sea (<em>coastal otters</em>) and inland
              (<em>river otters</em>).
            </p>
            <H3 className="h3">Sea Otters</H3>
            <p>
              Sea otters generally have much smaller home ranges than their
              inland friends. This is because there&apos;s plenty of fish and
              and other prey along the coastline. They tend to spend a lot of
              time in the <strong>ocean</strong>.
            </p>
            <H3 className="h3">River Otters</H3>
            <p>
              River otters spend a lot of time on land, unless they need to hunt
              or travel. They live in <strong>dens</strong> or{' '}
              <strong>burrows</strong>. These can be naturally made, or built by
              another animal. This protects them from predators.
            </p>
            <H2 className="h2">Otterly Amazing Facts</H2>
            <ul>
              <li>
                Sea otters hold hands while sleeping so they don&apos;t drift
                apart
              </li>
              <li>Otters eat 20-33% of their body weight each day</li>
              <li>Otters reach swim speeds of up to 7 miles per hour</li>
              <li>
                Otters use their whiskers to help them find their next meal
              </li>
            </ul>
          </Overlay>
        </StyledContainer>
      )}
    </PlaygroundContext.Consumer>
  </Playground>
);

export default VisualAcuity;
