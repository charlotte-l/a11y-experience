import styled, { css, CSSProp } from 'styled-components';

type GridProps = {
  columns: string;
  rows?: string;
  styles?: CSSProp<any>;
  children: React.ReactNode;
};

const GridWrapper = styled.div<{ $columns: string; $rows: string }>`
  display: grid;

  ${({ $columns }) => css`
    grid-template-columns: ${$columns};
  `}

  ${({ $rows }) => css`
    grid-template-rows: ${$rows};
  `}
`;

const Grid = ({
  columns,
  rows = '',
  styles,
  children,
}: GridProps) => (
  <GridWrapper className="grid" $columns={columns} $rows={rows} css={styles}>
    {children}
  </GridWrapper>
);

export default Grid;
