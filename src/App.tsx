import { ThemeProvider } from "styled-components";

import { Home } from "./pages/Home";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GithubUserProvider } from "./contexts/githubUserContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <GithubUserProvider>
          <Router />
        </GithubUserProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
