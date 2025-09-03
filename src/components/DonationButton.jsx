import { Typography } from "@mui/material";

export default function DonationButton({ amount, handleClick }) {
  return (
    <Typography
      sx={{
        border: "1px solid grey.300",
        bgcolor: "white",
        borderRadius: 4,
        fontSize: "h2.fontSize",
        fontWeight: "bold",
        padding: "3rem",
        m: "1rem",
      }}
      onClick={() => handleClick(amount)}
    >
      {amount} Taka
    </Typography>
  );
}
