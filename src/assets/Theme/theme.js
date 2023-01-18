import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0D0D0D",
    },
  },
  typography: {
    allVariants: {
      fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(","),
      color: "#fff",
    },
    fontSize: 16,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#0D0D0D",
        },
      },
    },
  },
});

export default theme;
