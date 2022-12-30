import { useContext } from 'react';
import styled from 'styled-components';
import ControlWrapper from './ControlWrapper';
import PlaygroundContext from '../PlaygroundContext';
import PlaygroundState from '../PlaygroundState';

type RadioControlProps = {
  id: keyof PlaygroundState;
  label: string;
  options: Array<{ label: string, value: string | number }>;
};

const Options = styled.fieldset`
  display: flex;
  align-items: center;
  gap: 2rem;
  border: medium none;
  padding: 0;

  & > legend {
    font-size: 1rem;
    font-weight: bold;
    padding: 0;
    float: left;
    flex-shrink: 0;
    min-width: 8rem;
  }

  & > label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    line-height: 0;
    cursor: pointer;
    flex-shrink: 0;

    > input {
      cursor: pointer;
    }
  }
`;

const RadioControl = ({ id, label, options }: RadioControlProps) => {
  const { id: playgroundId, state, setState } = useContext(PlaygroundContext);

  const inputName = `${playgroundId}-${id}`;

  return (
    <ControlWrapper>
      <Options>
        <legend>{label}</legend>
        {options.map((option) => (
          <label key={option.value}>
            <input
              type="radio"
              checked={state[id] === option.value}
              name={inputName}
              value={option.value}
              onChange={() => {
                setState((s: PlaygroundState) => ({ ...s, [id]: option.value }));
              }}
            />
            {option.label}
          </label>
        ))}
      </Options>
    </ControlWrapper>
  );
};

export default RadioControl;
