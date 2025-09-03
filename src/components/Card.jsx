import { Button, Paper, Typography } from "@mui/material";

export default function Card({ title, btn, variant }) {
  return (
    <Paper
      elevation={0}
      sx={{
        border: "1px solid #0e0e0e26",
        borderRadius: 4,
        bgcolor: variant ? `${variant}.light` : "White",
        margin: "1.5rem",
        padding: "1.5rem",
      }}
    >
      <img
        style={{
          marginBottom: "1.5rem",
        }}
        src="/card-icon.png"
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
          sx={{ color: "white", bgcolor: `${variant}.main`, mt: "1.5rem" }}
          variant="contained"
        >
          {btn.text}
        </Button>
      )}
    </Paper>
  );
}
