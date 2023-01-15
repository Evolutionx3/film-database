import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#0D0D0D",
    },
    primary: {
      main: "#0D0D0D",
    },
    secondary: {
      main: "#32E5BB",
    },
  },
  typography: {
    allVariants: {
      fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(","),
      color: "#fff",
    },
    fontSize: 16,
  },
});

export default theme;
