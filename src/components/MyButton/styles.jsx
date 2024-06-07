import styled from 'styled-components';
import { Button } from 'antd';

export const ButtonStyling = styled(Button)`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  background-color: var(--orange) !important;
  border-color: var(--transparent) !important;
  border-radius: unset !important;
  color: var(--white) !important;
  font-size: 24px;
  font-weight: bold;
  font-family: 'GoogleSans-Bold', sans-serif;

  /* media quires */
  @media (max-width: 576px) {
    font-size: 12px;
    font-family: 'GoogleSans-Regular', sans-serif;
  }
`;
