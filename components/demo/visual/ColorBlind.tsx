import Image from 'next/image';
import TextContent from '../TextContent';
import Playground from '../../Playground';
import Overlay from './Overlay';
import SelectControl from '../../controls/SelectControl';

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
    <Overlay type="color">
      <TextContent />
      <Image alt="" src="/benny-and-godzilla.jpg" width="200" height="200" />
    </Overlay>
  </Playground>
);

export default ColorBlind;
