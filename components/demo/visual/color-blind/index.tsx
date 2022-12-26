import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import TextWrapper from '../../TextWrapper';
import Playground from '../../../Playground';
import Overlay from '../Overlay';
import SelectControl from '../../../controls/SelectControl';
import Alert from '../../Alert';
import TubeStations from './TubeStations';
import stations from './tubeStationData';
import Container from '../../../Container';
import Form from './Form';

const FormHeading = styled.span`
  display: block;
  margin-top: 3rem;
  margin-bottom: 0.5rem;
  font-size: 1.17em;
  font-weight: bold;
  line-height: 1.2;
  font-family: Cambria, 'Hoefler Text', Utopia, 'Liberation Serif',
    'Nimbus Roman No9 L Regular', Times, 'Times New Roman', serif;
`;

const ColorBlind = () => (
  <Playground
    id="color-blindness-demo"
    initialValues={{
      'color-deficiency': '',
    }}
    controls={[
      <SelectControl
        key="color-deficiency"
        id="color-deficiency"
        label="Color deficiency"
        options={[
          { label: 'None', value: '' },
          { label: 'Protanopia', value: 'protanopia' },
          { label: 'Protanomaly', value: 'protanomaly' },
          { label: 'Deuteranopia', value: 'deuteranopia' },
          { label: 'Deuteranomaly', value: 'deuteranomaly' },
          { label: 'Tritanopia', value: 'tritanopia' },
          { label: 'Tritanomaly', value: 'tritanomaly' },
          { label: 'Achromatopsia', value: 'achromatopsia' },
        ]}
      />,
    ]}
  >
    <Container css={'padding: 1rem 1rem 3rem'}>
      <Overlay type="color">
        <TextWrapper>
          <p>
            Greater London is served by{' '}
            <Link
              href="https://tfl.gov.uk/tube-dlr-overground/status/"
              target="_blank"
              rel="noopener nofollow"
              css={`
                text-decoration: none;
                &:hover {
                  background-color: transparent;
                }
              `}
            >
              11 Tube lines
            </Link>
            , along with the Docklands Light Railway (DLR), the London
            Overground, the Elizabeth line and{' '}
            <Link
              href="https://tfl.gov.uk/tube-dlr-overground/status/"
              target="_blank"
              rel="noopener nofollow"
            >
              National Rail services
            </Link>
            .
          </p>
          <Alert
            $level="error"
            message="There are delays on the Jubilee line due to bad weather conditions."
          />
          <TubeStations
            stations={stations}
            styles={'text-align: center; margin: 1.5rem 0;'}
          />
          <p>Below, you can see a map of tube stations in central London:</p>
        </TextWrapper>
        <Image
          alt="A color map of the London Underground showing a central section of stations"
          src="/london-underground.png"
          width="1367"
          height="879"
          style={{ height: 'auto', marginBlockEnd: '1.5em' }}
        />
        <Alert
          $level="success"
          message="Step free access is now available on the Elizabeth line."
          noIcon={true}
        />
        <FormHeading>Sign up for status updates</FormHeading>
        <Form />
      </Overlay>
    </Container>
  </Playground>
);

export default ColorBlind;
