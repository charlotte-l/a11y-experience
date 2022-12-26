import React from 'react';
import styled, { CSSProp } from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

const GridItem = ({
  styles,
  children,
}: {
  styles: CSSProp<any>;
  children: React.ReactNode;
}) => <Flex css={styles}>{children}</Flex>;

export default GridItem;
