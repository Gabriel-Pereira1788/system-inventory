import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Router from "./routes/Router";
import defaultTheme from "./styles/themes/default";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;

