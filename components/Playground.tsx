import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import PlaygroundContext from './PlaygroundContext';

type PlaygroundProps = {
  id: string;
  initialValues: any;
  controls?: Array<any>;
  children?: React.ReactNode;
};

const PlaygroundWrapper = styled.div`
  background-color: var(--playground-bg);
  border: 1px solid var(--link-text);
  border-radius: var(--border-radius);
  padding: 0.5rem;
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
        {children}
        {controls}
      </PlaygroundWrapper>
    </PlaygroundContext.Provider>
  );
};

export default Playground;
