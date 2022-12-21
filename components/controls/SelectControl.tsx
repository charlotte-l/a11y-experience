import { useContext } from 'react';
import ControlWrapper from './ControlWrapper';
import PlaygroundContext from '../PlaygroundContext';

type SelectControlProps = {
  id: string;
  label: string;
  options: Array<any>;
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
          setState((s) => ({ ...s, [id]: e.target.value }));
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
