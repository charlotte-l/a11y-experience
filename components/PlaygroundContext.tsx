import React from 'react';
import PlaygroundState from './PlaygroundState';

type PlaygroundContext = {
  id: string;
  state: PlaygroundState;
  setState: React.Dispatch<React.SetStateAction<any>>;
};

export default React.createContext<PlaygroundContext>({} as PlaygroundContext);
