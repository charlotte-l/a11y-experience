import React, { useContext } from 'react';
import styled from 'styled-components';
import PlaygroundContext from '../PlaygroundContext';
import PlaygroundState from '../PlaygroundState';

type OverlayProps = {
  type: string;
  children: React.ReactNode;
};

const StyledOverlay = styled.div`
  width: 100%;
  height: 100%;
`;

const blur = (amount: number = 0) => `
  filter: blur(${amount}px);
`;

const cloudy = (amount: number = 0) => `
  filter: blur(${amount * 1.5}px) contrast(${1 / Math.E ** amount});
`;

const color = (type: string = '') => `
  filter: url('color-filters.svg#${type}');
`;

const obstruction = (type: string = '', severity: number = 0) => `
  position: relative;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }

  ${type === 'central' && `
    ::after {
      background: radial-gradient(${severity}px circle, rgba(190,190,190,1) 0%, rgba(255,255,255,0) 100%);
    }
    `
}

  ${type === 'peripheral'
  && `::after {
      box-shadow: inset black 0 0 ${severity > 0 ? '50' : '0'}px ${severity}px;
    }`
}

  ${type === 'spots'
    && `::after {
      background: url('obstruction-spots.svg');
      background-size: cover;
      opacity: ${severity / 60};
      filter: blur(2px) contrast(${severity / 60 + 0.5});
    }`
}
`;

const createStyles = (type: string, state: PlaygroundState) => {
  switch (type) {
    case 'blur':
      return blur(state.blurriness);

    case 'cloudy':
      return cloudy(state.cloudiness);

    case 'color':
      return color(state['color-deficiency']);

    case 'obstruction':
      return obstruction(state.obstruction, state.severity);

    default:
      return '';
  }
};

const Overlay = ({ type, children }: OverlayProps) => {
  const { state } = useContext(PlaygroundContext);
  const styles = createStyles(type, state);

  return <StyledOverlay css={styles}>{children}</StyledOverlay>;
};

export default Overlay;
