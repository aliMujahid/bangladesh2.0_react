import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import CustomTheme from "./utils/CustomTheme";
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={CustomTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
