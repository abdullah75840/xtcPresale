import styled from 'styled-components';
import { Modal } from 'antd';

export const ModalStyling = styled(Modal)`
  .modalHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 14px;
      font-weight: 500;
      font-family: 'GoogleSans-Medium', sans-serif;
      color: var(--blue);
      margin: 0;
    }
    svg {
      font-size: 2em;
      color: var(--blue);
      cursor: pointer;
    }
  }
  .modalBody {
    margin: 1em 0 1.5em;
    p {
      font-size: 14px;
      margin: 0;
      color: var(--black);
    }
  }
  .modalFooter {
    .claimBtn {
      width: 100%;
      height: 36px;
      border-radius: 27px;
      overflow: hidden;
      button {
        background-color: var(--gray) !important;
        font-size: 14px;
      }
    }
  }
`;
