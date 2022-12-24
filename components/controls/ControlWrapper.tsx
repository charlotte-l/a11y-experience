import React from 'react';
import styled from 'styled-components';

type ControlWrapperProps = {
  children?: React.ReactNode;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ControlWrapper = ({ children }: ControlWrapperProps) => <Wrapper>{children}</Wrapper>;

export default ControlWrapper;
