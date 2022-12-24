import styled, { css } from 'styled-components';
import Error from '../icons/Error';
import Warning from '../icons/Warning';
import Success from '../icons/Success';

type AlertProps = {
  $level: 'success' | 'warning' | 'error';
  message: string;
};

const alertIcons = {
  success: <Success />,
  warning: <Warning />,
  error: <Error />,
};

const AlertDiv = styled.div<{ $level: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.375em;
  padding: 0.25rem 0.5rem;

  ${(props) => {
    switch (props.$level) {
      case 'success':
        return css`
          background-color: #edf7ed;
          color: #1e4620;
        `;
      case 'warning':
        return css`
          background-color: #fff4e5;
          color: #663c00;
        `;
      case 'error':
        return css`
          background-color: #fdeded;
          color: #5f2120;
        `;
      default:
        return css`
          background-color: white;
          color: black;
        `;
    }
  }}
`;

const Alert = ({ $level, message }: AlertProps) => (
  <AlertDiv className="alert" $level={$level}>
    {alertIcons[$level]}
    {message}
  </AlertDiv>
);

export default Alert;
