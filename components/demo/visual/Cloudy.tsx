import Image from 'next/image';
import TextContent from '../TextContent';
import Playground from '../../Playground';
import Overlay from './Overlay';
import SliderControl from '../../controls/SliderControl';
import RadioControl from '../../controls/RadioControl';

const Cloudy = () => (
  <Playground
    id="cloudy-demo"
    initialValues={{
      cloudiness: 0,
      textSize: 14,
    }}
    controls={[
      <SliderControl
        key="cloudiness"
        id="cloudiness"
        label="Cloudiness"
        min={0}
        max={1}
        step={0.01}
      />,
      <RadioControl
        key="textSize"
        id="textSize"
        label="Text size"
        options={[
          { label: 'Small (14px)', value: 14 },
          { label: 'Medium (16px)', value: 16 },
          { label: 'Large (24px)', value: 24 },
          { label: 'Extra large (32px)', value: 32 },
        ]}
      />,
    ]}
  >
    <Overlay type="cloudy">
      <TextContent />
      <div>
        <Image alt="" src="/benny-and-godzilla.jpg" width="200" height="200" />
      </div>
    </Overlay>
  </Playground>
);

export default Cloudy;
