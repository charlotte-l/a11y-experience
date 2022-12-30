import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import { useState } from 'react';
import Playground from '../../../Playground';
import Overlay from '../Overlay';
import RadioControl from '../../../controls/RadioControl';
import SliderControl from '../../../controls/SliderControl';
import TextWrapper from '../../TextWrapper';
import Modal from './Modal';

const DemoHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--link-text);
  margin-bottom: 1.5rem;
`;

const DemoHeading = styled.span<{ size?: string }>`
  display: block;
  padding: 0.5rem;
  font-size: ${(props) => (props.size === 'small' ? '1.2em' : '1.5em')};
  font-weight: bold;
  line-height: 1.2;
  font-family: Cambria, 'Hoefler Text', Utopia, 'Liberation Serif',
               'Nimbus Roman No9 L Regular', Times, 'Times New Roman', serif;
  background: var(--link-text);
  color: #FFF;
`;

const SearchBarWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: -40px;
`;

const SidebarHeading = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.17em;
  font-weight: bold;
  line-height: 1.2;
  font-family: Cambria, 'Hoefler Text', Utopia, 'Liberation Serif',
               'Nimbus Roman No9 L Regular', Times, 'Times New Roman', serif;
`;

const DemoNav = styled.nav`
  & > ul {
    list-style: none;
    padding-inline-start: 0;
  }
`;

const LowContrastButton = styled.button`
  background: linear-gradient(
    to right,
    var(--link-bg) 0%,
    var(--link-text) 100%
  );
  box-shadow: none;
  font-size: inherit;

  &:hover {
    background: linear-gradient(
      to right,
      var(--link-bg) 0%,
      var(--link-text) 100%
    );
  }
`;

const LowContrastLink = styled(Link)`
  color: #aaa;

  &:hover {
    color: #666;
    background-color: transparent;
  }
`;

const Obstruction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const openSearch = () => {
    setShowSearch(!showSearch);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <Playground
      id="obstruction-demo"
      initialValues={{
        obstruction: 'cloudy',
        severity: 0,
        textSize: 14,
        zoom: 1,
      }}
      controls={[
        <RadioControl
          key="obstruction"
          id="obstruction"
          label="Obstruction type"
          options={[
            { label: 'Cloudiness', value: 'cloudy' },
            { label: 'Central', value: 'central' },
            { label: 'Peripheral', value: 'peripheral' },
            { label: 'Large spots', value: 'spots' },
          ]}
        />,
        <SliderControl
          key="severity"
          id="severity"
          label="Severity"
          min={0}
          max={100}
          step={5}
        />,
        <RadioControl
          key="textSize"
          id="textSize"
          label="Font size"
          options={[
            { label: '14px', value: 14 },
            { label: '16px', value: 16 },
            { label: '24px', value: 24 },
            { label: '32px', value: 32 },
          ]}
        />,
        <RadioControl
          key="zoom"
          id="zoom"
          label="Zoom level"
          options={[
            { label: '100%', value: 1 },
            { label: '150%', value: 1.5 },
            { label: '200%', value: 2 },
            { label: '400%', value: 4 },
          ]}
        />,
      ]}
    >
      <Overlay type="obstruction">
        <div
          css={`
            max-height: 400px;
            overflow: auto;
            padding: 1rem;
          `}
        >
          <div>
            <DemoHeader>
              <DemoHeading>Modernist Writers: <span css={'color: #3fc761'}>Franz Kafka</span></DemoHeading>
              <button onClick={openSearch}>
                <span aria-hidden="true">
                  <Image src="/search-icon.svg" alt="" width={18} height={18} />
                </span>
                <span className="visually-hidden">Search (demo only)</span>
              </button>
              {showSearch && (
                <SearchBarWrapper>
                  <input type="search" placeholder="Search..." autoFocus={true} />
                </SearchBarWrapper>
              )}
            </DemoHeader>
            <Image
              alt=""
              src="/kafka-portrait.jpg"
              width="300"
              height="400"
            />
            <div
              css={`
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                gap: 1rem;
                padding: 1.5rem 0;
              `}
            >
              <div
                css={`
                  width: 300px;
                `}
              >
                <DemoHeading size='small'>
                  An excerpt from <span css={'color: #3fc761'}>&lsquo;The Metamorphosis&rsquo;</span>:
                </DemoHeading>

                <TextWrapper>
                  <p>
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                  </p>

                  <p>
                    He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and
                    divided by arches into stiff sections. The bedding was
                    hardly able to cover it and seemed ready to slide off any
                    moment.
                  </p>

                  <p>
                    His many legs, pitifully thin compared with the size of the
                    rest of him, waved about helplessly as he looked.
                    &lsquo;What&apos;s happened to me?&raquo; he thought. It
                    wasn&apos;t a dream.
                  </p>
                  <p>
                    His room, a proper human room although a little too small,
                    lay peacefully between its four familiar walls.
                  </p>

                  <p>
                    A collection of textile samples lay spread out on the table
                    - Samsa was a travelling salesman - and above it there hung
                    a picture that he had recently cut out of an illustrated
                    magazine and housed in a nice, gilded frame. It showed a
                    lady fitted out with a fur hat and fur boa who sat upright,
                    raising a heavy fur muff that covered the whole of her lower
                    arm towards the viewer. Gregor then turned to look out the
                    window at the dull weather.
                  </p>
                </TextWrapper>
              </div>
              <aside>
                <TextWrapper>
                  <SidebarHeading>The writings of Kafka</SidebarHeading>
                  <DemoNav>
                    <ul>
                      <li>
                        <LowContrastLink
                          href="https://en.wikipedia.org/wiki/The_Metamorphosis"
                          target="_blank"
                          rel="noopener nofollow"
                        >
                          The Metamorphosis
                        </LowContrastLink>
                      </li>
                      <li>
                        <Link
                          href="https://en.wikipedia.org/wiki/The_Trial"
                          target="_blank"
                          rel="noopener nofollow"
                        >
                          The Trial
                        </Link>
                      </li>
                      <li>
                        <LowContrastLink
                          href="https://en.wikipedia.org/wiki/The_Castle_(novel)"
                          target="_blank"
                          rel="noopener nofollow"
                        >
                          The Castle
                        </LowContrastLink>
                      </li>
                      <li>
                        <LowContrastLink
                          href="https://en.wikipedia.org/wiki/Letter_to_His_Father"
                          target="_blank"
                          rel="noopener nofollow"
                        >
                          Letter to Father
                        </LowContrastLink>
                      </li>
                      <li>
                        <Link
                          href="https://en.wikipedia.org/wiki/Contemplation_(Kafka)"
                          target="_blank"
                          rel="noopener nofollow"
                        >
                          Meditation
                        </Link>
                      </li>
                    </ul>
                    <LowContrastButton onClick={openModal} >
                      Get the newsletter
                    </LowContrastButton>
                  </DemoNav>
                </TextWrapper>
              </aside>
            </div>
            <TextWrapper>
              <Modal
                title="Subscribe to the newsletter"
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              >
                  <p>
                    This is just a demo. Unfortunately, there&apos;s no Kafka
                    newsletter here. Sorry!
                  </p>
              </Modal>
            </TextWrapper>
          </div>
        </div>
      </Overlay>
    </Playground>
  );
};

export default Obstruction;
