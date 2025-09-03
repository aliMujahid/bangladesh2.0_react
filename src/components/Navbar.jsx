import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, py: "2.5rem", maxWidth: "xl", mx: "auto" }}>
      <AppBar position="static" color="" elevation="0">
        <Toolbar>
          <Link
            variant="h3"
            href="#"
            sx={{ flexGrow: 1, color: "black" }}
            underline="none"
          >
            Bangladesh2.0
          </Link>
          <Button
            variant="outlined"
            sx={{ color: "primary.main", border: "2px solid", py: "0.7rem" }}
          >
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
