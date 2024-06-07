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
    .inputLabel {
      font-family: 'GoogleSans-Medium', sans-serif;
      color: var(--blue);
    }
    .tokenBtn {
      height: 97px;
      border-radius: 18px;
      background-color: rgba(24, 62, 179, 0.41);
      color: var(--white);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 0.5em;
      & > span:first-child {
        font-size: 13px;
      }
      & > div {
        display: flex;
        align-items: center;
        span {
          font-size: 20px;
        }
        img {
          margin-right: 0.25em;
        }
      }
    }
    .claimBtn {
      width: 100%;
      height: 48px;
      border-radius: 27px;
      overflow: hidden;
      margin: 1em 0 1.5em;
      button {
        font-size: 16px;
      }
    }
    .codeBtn {
      width: 100%;
      height: 48px;
      border-radius: 27px;
      overflow: hidden;
      button {
        background-color: var(--blue) !important;
        font-size: 16px;
      }
    }
    .ant-input-affix-wrapper {
      width: 100%;
      height: 48px;
      border-radius: 27px;
      padding: 0.25em 0.5em 0.25em 1.15em;
      background-color: var(--whitesmoke);
      border: 1px solid var(--blue);
      margin-bottom: 2em;
      .ant-input-suffix {
        button {
          width: 85px;
          height: 40px;
          background-color: var(--orange);
          box-shadow: none;
          border: 0;
          border-radius: 21px;
          color: var(--white);
        }
      }
      input {
        border-color: unset !important;
        box-shadow: none !important;
        font-size: 16px;
        font-family: 'GoogleSans-Regular', sans-serif;
        &::placeholder {
          color: var(--gray);
        }
      }
    }
  }
`;
