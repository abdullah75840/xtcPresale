import styled from "styled-components";

export const HeroSection = styled.div`
  position: relative;
  height: auto;
  min-height: calc(100vh - 166px);
  background-color: var(--blue);
  padding: 3em 0 2em;
  margin: 1em;
  border-radius: 20px;
  .personImg {
    position: absolute;
    bottom: 0;
    left: 40%;
    transform: translateX(-25%);
  }
  .sectionInfo {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .infoTitles {
      width: 100%;
      max-width: 673px;
      margin-top: 2.5em;
      img {
        width: 100%;
      }
      h3 {
        width: 100%;
        max-width: 668px;
        margin-top: 0.5em;
        font-family: "GoogleSans-Medium", sans-serif;
        color: var(--white);
      }
    }
    .infoButtons {
      display: flex;
      & > div {
        width: 100%;
        max-width: 195px;
        height: 52px;
        border-radius: 20px;
        overflow: hidden;
        &:first-child {
          margin-right: 1em;
        }
      }
    }
  }
  .sectionCard {
    width: 100%;
    max-width: 610px;
    margin-left: auto;
    background-color: var(--lightblue);
    border-radius: 20px;
    padding: 2em;
    .cardHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.25em;
      h2 {
        font-family: "GoogleSans-Medium", sans-serif;
        color: var(--white);
      }
      .label {
        width: 59px;
        height: 27px;
        background: var(--orange);
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        & > div:first-child {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--green);
          filter: blur(0.20000000298023224px);
          border: 1px solid var(--lightgreen);
          margin-right: 0.375em;
        }
        & > span:last-child {
          font-size: 0.875em;
          color: var(--white);
        }
      }
    }
    .cardLabel {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1.25em 0;
      p {
        font-size: 1.0625em;
        margin: 0;
        color: var(--white);
      }
      & > div:nth-child(2) {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--skyblue);
        margin: 0 1.125em;
      }
    }
    .connectWallet {
      .tokenBtn {
        height: 97px;
        border-radius: 18px;
        background-color: rgba(255, 255, 255, 0.41);
        color: var(--white);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 2em;
        & > span:first-child {
          font-size: 17px;
        }
        & > div {
          display: flex;
          align-items: center;
          span {
            font-size: 27px;
          }
          img {
            margin-right: 1em;
          }
        }
      }
      p {
        font-size: 1.0625em;
        margin: 1.5em 0;
        color: var(--white);
        text-align: center;
      }
    }
    .buySection {
      margin: 1em 0;
      .buyBtn {
        width: 100%;
        height: 54px;
        border-radius: 20px;
        overflow: hidden;
        button {
          background-color: var(--white) !important;
          color: var(--black) !important;
          font-size: 1.0625em;
          font-family: "GoogleSans-Regular", sans-serif;
          justify-content: start;
          img {
            margin-right: 0.3em;
          }
        }
      }
      .ant-input-affix-wrapper {
        width: 100%;
        height: 54px;
        border-radius: 27px;
        padding: 0.25em 1.15em;
        .ant-input-prefix {
          margin-right: 1em;
        }
        input {
          border-color: unset !important;
          box-shadow: none !important;
          font-size: 17px;
          font-family: "GoogleSans-Regular", sans-serif;
          &::placeholder {
            color: var(--gray);
          }
        }
      }
    }
    .cardFooter {
      .footLabel {
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-family: "GoogleSans-Medium", sans-serif;
          font-weight: 500;
          color: var(--white);
          cursor: pointer;
          &:first-child {
            font-size: 1.0625em;
          }
          &:last-child {
            font-size: 1.125em;
          }
        }
      }
      .buyBtn {
        width: 100%;
        height: 70px;
        border-radius: 25px;
        overflow: hidden;
      }
    }
  }

  /* media quires */
  @media (max-width: 1300px) {
    .sectionCard {
      .tokenBtn {
        & > div {
          span {
            font-size: 18px !important;
          }
        }
        span {
          font-size: 16px !important;
        }
      }
    }
  }
  @media (max-width: 991px) {
    padding: 0;
    .personImg {
      width: 371px;
      top: 17%;
      right: 0;
      left: unset;
      transform: unset;
    }
    .container {
      max-width: 100% !important;
      padding: 0;
    }
    .sectionInfo {
      justify-content: unset;
      height: 60vh;
      padding: 3em 2em 0;
      .infoTitles {
        max-width: 70%;
        margin-bottom: 1em;
        h3 {
          font-size: 22px;
        }
      }
    }
    .sectionCard {
      max-width: 100%;
    }
  }
  @media (max-width: 576px) {
    .personImg {
      width: 175px;
      height: 175px;
      top: 9%;
      right: 0;
      left: unset;
      transform: unset;
    }
    .sectionInfo {
      height: 27vh;
      padding: 2em 1.5em 0;
      .infoTitles {
        max-width: 65%;
        margin-top: 0;
        h3 {
          font-size: 12px;
        }
      }
      .infoButtons {
        & > div {
          max-width: 100px;
          height: 22px;
        }
      }
    }
    .sectionCard {
      padding: 1em 1em;
      .cardLabel {
        p {
          font-size: 0.875em;
        }
      }
      .connectWallet {
        p {
          margin: 0.75em 0;
        }
        .tokenBtn {
          padding: 0 0.75em;
          height: 54px;
          & > span:first-child {
            font-size: 13px !important;
            margin-bottom: 0.375em;
          }
          & > div {
            span {
              font-size: 16px !important;
            }
            img {
              width: 18px;
              height: 18px;
              margin-right: 0.5em;
            }
          }
        }
      }
      .buySection {
        .buyBtn {
          height: 40px;
          button {
            font-size: 12px;
            img {
              width: 18px;
              height: 18px;
              margin-right: 0;
            }
          }
        }
        .ant-input-affix-wrapper {
          height: 40px;
          padding: 0.25em 1em;
          .ant-input-prefix {
            margin-right: 0.25em;
            img {
              width: 18px;
              height: 18px;
            }
          }
          input {
            font-size: 14px;
          }
        }
      }
      .cardFooter {
        .footLabel {
          p {
            font-size: 13px !important;
          }
        }
        .buyBtn {
          height: 50px;
        }
      }
    }
  }
`;
