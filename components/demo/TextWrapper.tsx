import React, { useContext } from 'react';
import PlaygroundContext from '../PlaygroundContext';

const TextWrapper = ({ children }: { children: React.ReactNode }) => {
  const { state } = useContext(PlaygroundContext);

  return (
    <div style={{ fontSize: `${state.textSize || '16px'}` }}>
      {children}
    </div>
  );
};

export default TextWrapper;
