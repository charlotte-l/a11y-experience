import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import PlaygroundContext from './PlaygroundContext';
import PlaygroundState from './PlaygroundState';

type PlaygroundProps = {
  id: string;
  initialValues: PlaygroundState;
  controls?: Array<React.ReactNode>;
  children?: React.ReactNode;
};

const PlaygroundWrapper = styled.div`
  background-color: var(--playground-bg);
  border: 1px solid var(--link-text);
  border-radius: var(--border-radius);
`;

const ControlsWrapper = styled.div`
  border-bottom: 1px solid var(--link-text);
  margin-bottom: 0.5rem;
`;

const Playground = ({
  id,
  initialValues,
  controls,
  children,
}: PlaygroundProps) => {
  const [state, setState] = useState(initialValues);

  const contextValue = useMemo(
    () => ({
      id,
      state,
      setState,
    }),
    [id, state, setState],
  );

  return (
    <PlaygroundContext.Provider value={contextValue}>
      <PlaygroundWrapper>
        <ControlsWrapper>
          {controls}
        </ControlsWrapper>
        {children}
      </PlaygroundWrapper>
    </PlaygroundContext.Provider>
  );
};

export default Playground;
