import { BrowserRouter as Router } from "react-router-dom";
import theme from "assets/Theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const AppProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>{children}</Router>
    </ThemeProvider>
  );
};

export default AppProviders;
