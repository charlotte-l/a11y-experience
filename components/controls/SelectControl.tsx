import { useContext } from 'react';
import styled from 'styled-components';
import ControlWrapper from './ControlWrapper';
import PlaygroundContext from '../PlaygroundContext';
import PlaygroundState from '../PlaygroundState';

type SelectControlProps = {
  id: keyof PlaygroundState;
  label: string;
  options: Array<{ label: string; value: string }>;
};

const StyledLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
  min-width: 8rem;
`;

const SelectControl = ({ id, label, options }: SelectControlProps) => {
  const { id: playgroundId, state, setState } = useContext(PlaygroundContext);

  const inputName = `${playgroundId}-${id}`;

  return (
    <ControlWrapper>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <select
        id={id}
        name={inputName}
        value={state[id] as string}
        onChange={(e) => {
          setState((s: PlaygroundState) => ({ ...s, [id]: e.target.value }));
        }}
        css={'cursor: pointer'}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </ControlWrapper>
  );
};

export default SelectControl;
