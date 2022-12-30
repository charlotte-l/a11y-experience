import { useContext } from 'react';
import styled from 'styled-components';
import ControlWrapper from './ControlWrapper';
import PlaygroundContext from '../PlaygroundContext';
import PlaygroundState from '../PlaygroundState';

type ToggleControlProps = {
  id: 'enabled';
  label: string;
};

const ToggleButton = styled.button`
  display: block;
  position: relative;
  border: none;
  color: inherit;
  background: none;
  line-height: inherit;
  text-align: left;
  font-weight: bold;
  padding: 0.4rem 4.5rem 0.4rem 0;
  min-height: unset;
  border-radius: 0;
  box-shadow: none;

  &:focus,
  &:hover {
    outline: none;
    background: none;
  }

  &::before,
  &::after {
    content: "";
    box-sizing: content-box;
    position: absolute;
    height: 1rem;
    transition: all 0.25s ease;
  }

  &::before {
    left: auto;
    right: 0;
    top: 0.4rem;
    width: 2.5rem;
    border: 0.2rem solid #CCC;
    background: #CCC;
    border-radius: 1.1rem;
  }

  &::after {
    left: auto;
    right: 1.5rem;
    top: 0.455rem;
    background-color: #fff;
    background-position: center center;
    border-radius: 50%;
    width: 1rem;
    border: 0.15rem solid #CCC;
  }

  &:focus::before,
  &:hover::before {
    box-shadow: 0 0 0.25rem #777;
  }

  &[aria-pressed=true]::before {
    background-color: var(--link-text);
    border-color: var(--link-text);
  }

  &[aria-pressed=true]::after {
    right: 0.125rem;
    border-color: var(--link-text);
    color: var(--link-text);
  }
`;

const ToggleControl = ({
  id, label,
}: ToggleControlProps) => {
  const { id: playgroundId, state, setState } = useContext(PlaygroundContext);

  const inputId = `${playgroundId}-${id}`;

  return (
    <ControlWrapper>
      <ToggleButton
        id={inputId}
        aria-pressed={state[id]}
        onClick={() => {
          setState((s: PlaygroundState) => ({ ...s, [id]: !state[id] }));
        }}
      >
        {label}
      </ToggleButton>
    </ControlWrapper>
  );
};

export default ToggleControl;
