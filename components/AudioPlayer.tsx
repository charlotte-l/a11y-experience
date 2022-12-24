import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

type AudioPlayerProps = {
  className?: string;
  id?: string;
  muted?: boolean;
  src?: string;
  title?: string;
  volume: number;
};

const updateVolume = (
  volume: number,
  el: React.RefObject<HTMLAudioElement>,
) => {
  const audio = el.current;
  if (
    audio !== null
    && typeof volume === 'number'
    && volume !== audio?.volume
  ) {
    audio.volume = volume;
  }
};

const StyledAudioPlayer = styled.audio`
  max-width: 220px;
  height: 25px;
  
  ::-webkit-media-controls-panel {
    background-color: var(--link-text);
    border-radius: 5px;
    border: 1px solid red;
  }
`;

const AudioPlayer = ({
  className,
  id,
  muted,
  src,
  title,
  volume,
}: AudioPlayerProps) => {
  const audioEl = React.createRef<HTMLAudioElement>();

  const incompatibilityMessage = (
    <p>
      Your browser does not support the <code>audio</code> element.
    </p>
  );

  const playerTitle = title || src;

  useEffect(() => {
    const audio = audioEl.current;
    if (!audio) return;

    updateVolume(volume, audioEl);
  }, [audioEl, volume]);

  return (
    <StyledAudioPlayer
      className={className}
      controls={true}
      crossOrigin="anonymous"
      id={id}
      muted={muted}
      preload="metadata"
      ref={audioEl}
      src={src}
      title={playerTitle}
    >
      {incompatibilityMessage}
    </StyledAudioPlayer>
  );
};

AudioPlayer.defaultProps = {
  className: '',
  id: '',
  muted: false,
  title: '',
  volume: 1.0,
};

AudioPlayer.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  muted: PropTypes.bool,
  src: PropTypes.string,
  title: PropTypes.string,
  volume: PropTypes.number,
};

export default AudioPlayer;
