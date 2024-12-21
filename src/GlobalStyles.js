import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #0077b6;
    --secondary-color: #00b4d8;
    --text-color: #333;
    --bg-color: #f9f9f9;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  h1, h2, h3 {
    font-weight: 700;
    margin-bottom: 0.75em;
  }

  p {
    margin-bottom: 1em;
    font-size: 1.1rem;
  }

  @media(max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export default GlobalStyles;
