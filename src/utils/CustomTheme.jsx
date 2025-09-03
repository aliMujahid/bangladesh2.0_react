import { createTheme } from "@mui/material";

const CustomTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "17px 34px",
          textTransform: "none",
          letterSpacing: "0.5px",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          "&:hover": { backgroundColor: "white" },
        },
      },
    },
  },
  palette: {
    background: {
      default: "#F5F5F5",
      paper: "#FFFFFF",
    },
    primary: {
      main: "#006a50",
      light: "#c6e4d6",
    },

    secondary: {
      main: "#5490f5",
      light: "#5490f533",
    },

    warning: {
      main: "#ffc239",
      light: "#ffc23933",
    },

    success: {
      main: "#09a15c",
      light: "#09a15c33",
    },
  },

  typography: {
    fontFamily: ["Fira Sans", "sans-serif"].join(","),
    h1: {
      fontSize: "clamp(2rem, 5vw + 1rem, 3.5rem)",
      fontWeight: "bold",
    },

    h2: {
      fontSize: "clamp(1.6rem, 2vw + 1rem, 2.5rem)",
      fontWeight: "bold",
    },

    h3: {
      fontSize: "clamp(1.4rem, 1.5vw + 0.9rem, 2rem)",
      fontWeight: "bold",
    },

    h4: {
      fontSize: "clamp(1rem, 1vw + 0.5rem, 1.25rem)",
      fontWeight: "bold",
    },

    h6: {
      fontSize: "clamp(0.95rem, 0.8vw + 0.5rem, 1.125rem)",
      fontWeight: "bold",
    },

    button: {
      fontSize: "clamp(0.95rem, 0.8vw + 0.5rem, 1.125rem)",
      fontWeight: "bold",
    },
  },
});

export default CustomTheme;
