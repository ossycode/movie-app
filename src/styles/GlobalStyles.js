import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
    --color-red-50: rgb(252, 71, 71);
    --color-darkBlue: rgb(16, 20, 30);
    --color-semi-darkBlue: rgb(22, 29, 47);
    --color-white: rgb(255, 255, 255);
    --color-greyish-blue: rgb(90, 105, 143);

    
}
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}
html,
body {
  overflow-x: hidden;
}

html {
  font-size: 62.5%;
}

body {
font-family: 'Outfit', sans-serif;
font-weight: 300;
background-color: var(--color-darkBlue);
color: var(--color-white);
transition: color 0.3s, background-color 0.3s;
min-height: 100vh;
line-height: normal;
font-size: 1.5rem;

}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

@media only screen and (max-width: 35em) {
  body {
    font-size: 1.3rem
  }
}
`;
