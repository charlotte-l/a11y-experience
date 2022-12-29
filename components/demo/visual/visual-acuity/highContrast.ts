import { css } from 'styled-components';

const highContrastStyles = css`
  background: black !important;

  * {
    font-size: 100px !important;
    line-height: 1.25 !important;
    letter-spacing: 0.06em !important;
    word-spacing: 0.08em !important;
    width: auto !important;
    box-shadow: none !important;
    color: yellow !important;
    background: black !important;
    transition: none !important;
    hyphens: auto !important;
  }

  nav,
  nav * {
    display: block !important;
  }

  nav {
    margin: 0px 0px 150px 0px !important;
  }

  .h1,
  .h2,
  .h3 {
    color: #8080ff !important;
    font-size: 120px !important;
  }

  .h1 {
    margin: 0px 0px 0px 0px !important;
  }

  .h2 {
    margin: 0px 0px 0px 150px !important;
  }

  .h3 {
    margin: 0px 0px 0px 283.3px !important;
  }

  em {
    color: white !important;
  }

  strong {
    color: #ffff80 !important;
  }

  ul,
  li {
    margin: 0 1em 0 55.6px !important;
  }

  p {
    margin-bottom: 2em !important;
  }

  a {
    color: #00ff00 !important;
  }

  a:hover {
    background: #0000c0 !important;
    background-color: #0000c0 !important;
  }
`;

export default highContrastStyles;
