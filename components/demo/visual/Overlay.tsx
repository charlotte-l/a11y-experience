import React, { useContext } from 'react';
import styled from 'styled-components';
import PlaygroundContext from '../../PlaygroundContext';
import PlaygroundState from '../../PlaygroundState';

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

const color = (type: string = '') => `
  filter: url('color-filters.svg#${type}');
`;

const obstruction = (type: string = '', severity: number = 0, zoom: number = 1) => {
  const baseStyles = `
    position: relative;
    
    > * > * {
      overflow: auto;
      transform: scale(${zoom});
      transform-origin: 0 0;
    }

    ::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
  `;

  switch (type) {
    case 'cloudy':
      return `
        > * > * {
          filter: blur(${severity / 60}px) contrast(${1 / Math.E ** (severity / 60)});
          transform: scale(${zoom});
          transform-origin: 0 0;
        }
      `;
    case 'central':
      return `
        ${baseStyles}

        ::after {
          background: radial-gradient(${severity * 1.5}px circle, rgba(190,190,190,1) 80%, rgba(255,255,255,0) 100%);
        }
      `;
    case 'peripheral':
      return `
        ${baseStyles}

        ::after {
          background: radial-gradient(circle at center, transparent ${100 - (severity / 2)}%, black ${100 - (severity / 2.5)}%);
        }
      `;
    case 'spots':
      return `
        ${baseStyles}

        ::after {
          background: url('obstruction-spots.svg');
          background-size: cover;
          opacity: ${severity / 60};
          filter: blur(2px) contrast(${severity / 60 + 0.5});
        }
      `;
    default:
      return '';
  }
};

const createStyles = (type: string, state: PlaygroundState) => {
  switch (type) {
    case 'blur':
      return blur(state.blurriness);

    case 'color':
      return color(state['color-deficiency']);

    case 'obstruction':
      return obstruction(state.obstruction, state.severity, state.zoom);

    default:
      return '';
  }
};

const Overlay = ({ type, children }: OverlayProps) => {
  const { state } = useContext(PlaygroundContext);
  const styles = createStyles(type, state);

  return (
    <StyledOverlay className='overlay' css={styles}>
      {children}
    </StyledOverlay>
  );
};

export default Overlay;
