import { Button, Paper, Typography } from "@mui/material";

import cardIcon from "../assets/images/card-icon.png";

export default function Card({ title, btn, variant, style = {} }) {
  return (
    <Paper
      elevation={0}
      sx={{
        border: "1px solid #0e0e0e26",
        borderRadius: 4,
        bgcolor: variant ? `${variant}.light` : "White",
        margin: { xs: "1.5rem auto", md: "1.5rem" },
        padding: "1.5rem",
        maxWidth: { xs: "80%", md: "40%" },
        ...style,
      }}
    >
      <img
        style={{
          marginBottom: "1.5rem",
        }}
        src={cardIcon}
        alt="lightbulb"
      />
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
        illo repellat!
      </Typography>
      {btn && (
        <Button
          sx={{
            color: "white",
            bgcolor: `${variant}.main`,
            mt: "1.5rem",
            width: { xs: "100%", md: "fit-content" },
          }}
          variant="contained"
        >
          {btn.text}
        </Button>
      )}
    </Paper>
  );
}
