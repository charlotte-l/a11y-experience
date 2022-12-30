import React from 'react';
import styled from 'styled-components';

type ControlWrapperProps = {
  children?: React.ReactNode;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 1rem;
`;

const ControlWrapper = ({ children }: ControlWrapperProps) => <Wrapper>{children}</Wrapper>;

export default ControlWrapper;
