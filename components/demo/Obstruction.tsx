import Image from 'next/image';
import Playground from '../Playground';
import Overlay from './Overlay';
import RadioControl from '../controls/RadioControl';
import SliderControl from '../controls/SliderControl';

const Obstruction = () => (
  <Playground
    id="obstruction-demo"
    initialValues={{
      obstruction: '',
      severity: 0,
    }}
    controls={[
      <RadioControl
        key="obstruction"
        id="obstruction"
        label="Obstruction type"
        options={[
          { label: 'None', value: '' },
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
        max={60}
        step={5}
      />,
    ]}
  >
    <Overlay type="obstruction">
      <Image alt="" src="/benny-and-godzilla.jpg" width="200" height="200" />
    </Overlay>
  </Playground>
);

export default Obstruction;
