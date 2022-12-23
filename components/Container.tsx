import styled, { css } from 'styled-components';

type Props = {
  cover?: boolean,
};

const coverMixin = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--nav-height) - var(--footer-height) - var(--footer-margin));
`;

const Container = styled.div<Props>`
  max-width: min(var(--max-width), 100%);
  margin: 0 auto;
  padding: 0 1.75rem;
  ${(props) => (props.cover && coverMixin)};
`;

export default Container;
