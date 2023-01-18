import { BrowserRouter as Router } from "react-router-dom";
import theme from "assets/Theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

const AppProviders = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>{children}</Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default AppProviders;
