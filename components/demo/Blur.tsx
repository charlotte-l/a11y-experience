import RadioControl from '../controls/RadioControl';
import TextContent from './TextContent';
import Playground from '../Playground';
import Overlay from './Overlay';

const Blur = () => (
  <Playground
    id="blurriness-demo"
    initialValues={{
      blurriness: 0,
      textSize: 14,
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
    <Overlay type="blur">
      <TextContent />
    </Overlay>
  </Playground>
);

export default Blur;
