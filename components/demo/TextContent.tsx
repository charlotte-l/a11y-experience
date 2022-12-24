import { useContext } from 'react';
import PlaygroundContext from '../PlaygroundContext';

const TextContent = () => {
  const { state } = useContext(PlaygroundContext);

  return (
    <span style={{ fontSize: `${state.textSize || '16px'}` }}>
      This is a test span
    </span>
  );
};

export default TextContent;
