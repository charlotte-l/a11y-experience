import { useContext } from 'react';
import styled from 'styled-components';
import ControlWrapper from './ControlWrapper';
import PlaygroundContext from '../PlaygroundContext';

type RadioControlProps = {
  id: string;
  label: string;
  options: Array<any>;
};

const Options = styled.fieldset`
  display: flex;
  align-items: center;
  gap: 32px;
  font-size: 0.875rem;
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
                setState((s) => ({ ...s, [id]: option.value }));
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
