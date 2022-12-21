import { useContext } from 'react';
import ControlWrapper from './ControlWrapper';
import PlaygroundContext from '../PlaygroundContext';
import PlaygroundState from '../PlaygroundState';

type SelectControlProps = {
  id: keyof PlaygroundState;
  label: string;
  options: Array<{ label: string; value: string }>;
};

const SelectControl = ({ id, label, options }: SelectControlProps) => {
  const { id: playgroundId, state, setState } = useContext(PlaygroundContext);

  const inputName = `${playgroundId}-${id}`;

  return (
    <ControlWrapper>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={inputName}
        value={state[id]}
        onChange={(e) => {
          setState((s: PlaygroundState) => ({ ...s, [id]: e.target.value }));
        }}
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
