import styled from 'styled-components';

export const HeadNav = styled.div`
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.11);
  margin: 0 1em;
  border-radius: 29px;
  .navbar {
    padding: 2em 0;
    .navbar-brand,
    .navbar-nav a {
      font-size: 1.5em;
      font-weight: bold;
      font-family: 'GoogleSans-Bold', sans-serif;
    }
    .navbar-brand {
      color: var(--red);
      margin-right: 2em;
    }
    .navbar-nav {
      a {
        padding: 0 1em;
        color: var(--black);
      }
      &.links {
        align-items: center;
        a {
          padding: 0 0.5em;
          svg {
            font-size: 40px;
            color: var(--orange);
          }
        }
        .connectBtn {
          width: 100%;
          max-width: 238px;
          height: 70px;
          border-radius: 13px;
          overflow: hidden;
          margin-left: 1.125em;
        }
      }
    }
    .socialLinks {
      display: none;
      margin: 0 1em 0 auto;
      a {
        padding: 0 0.5em;
        svg {
          font-size: 24px;
          color: var(--orange);
        }
      }
    }
  }

  /* media quires */
  @media (max-width: 1300px) {
    .navbar {
      .navbar-brand {
        margin-right: 0.5em;
      }
      .navbar-nav {
        a {
          font-size: 1.125em;
          padding: 0 0.5em;
        }
      }
    }
  }
  @media (max-width: 991px) {
    .navbar {
      .socialLinks {
        display: block;
      }
      .navbar-nav {
        a {
          padding: 0.75em 0;
        }
        &.links {
          align-items: end;
          a {
            display: none;
          }
          .connectBtn {
            max-width: 200px;
            height: 40px;
            margin-left: 0;
          }
        }
      }
    }
  }
`;
