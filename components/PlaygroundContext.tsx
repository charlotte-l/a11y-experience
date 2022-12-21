import React from 'react';

type PlaygroundContext = {
  id: string,
  state: any,
  setState: React.Dispatch<React.SetStateAction<any>>
};

export default React.createContext<PlaygroundContext>({} as PlaygroundContext);
