import { useContext } from 'react';
import styled from 'styled-components';
import ControlWrapper from './ControlWrapper';
import PlaygroundContext from '../PlaygroundContext';
import PlaygroundState from '../PlaygroundState';

type SliderControlProps = {
  id: keyof PlaygroundState;
  label: string;
  min: number;
  max: number;
  step?: number;
};

const StyledLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
`;

const SliderControl = ({
  id, label, min, max, step,
}: SliderControlProps) => {
  const { id: playgroundId, state, setState } = useContext(PlaygroundContext);

  const inputName = `${playgroundId}-${id}`;

  return (
    <ControlWrapper>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <input
        type="range"
        id={id}
        name={inputName}
        min={min}
        max={max}
        step={step}
        value={state[id] as string}
        onChange={(e) => {
          setState((s: PlaygroundState) => ({ ...s, [id]: e.target.value }));
        }}
      />
    </ControlWrapper>
  );
};

export default SliderControl;
