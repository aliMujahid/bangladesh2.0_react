import { Button, TextField, useMediaQuery, useTheme } from "@mui/material";

export default function SubcriptionForm() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <form className="subscription-form">
      <div
        style={{
          width: "80%",
          margin: "0 auto",
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
        <TextField
          sx={{
            bgcolor: "white",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },

            borderTopLeftRadius: 16,
            borderBottomLeftRadius: { xs: 0, sm: 16 },
            borderTopRightRadius: { xs: 16, sm: 0 },

            py: "0.25rem",
            pl: "1rem",
            minWidth: { xs: "100%", sm: "60%" },
          }}
          placeholder="Enter your email here"
        />
        <Button
          sx={{
            borderRadius: "unset",
            borderTopRightRadius: { xs: 0, sm: 16 },
            borderBottomRightRadius: 16,
            borderBottomLeftRadius: { xs: 16, sm: 0 },
            py: { sm: "1.25rem", md: "1.1rem", lg: "1rem" },
            width: { xs: "100%", sm: "inherit" },
          }}
          variant="contained"
        >
          Subscribe
        </Button>
      </div>
    </form>
  );
}
