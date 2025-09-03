import { Box, TextField, Button, useTheme } from "@mui/material";
import { useState } from "react";

import DonationButton from "./DonationButton";

export default function DonationForm() {
  const theme = useTheme();
  const amounts = [100, 200, 500, 10000];

  const [donationAmount, setDonationAmount] = useState(0);

  const handleClick = (x) => {
    setDonationAmount(x);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(donationAmount);
  };

  return (
    <>
      <Box
        className="donate-options"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flex: " 1 1 0",
          justifyContent: "space-around",
        }}
      >
        {amounts.map((amount) => (
          <DonationButton
            key={amount}
            amount={amount}
            handleClick={handleClick}
          />
        ))}
      </Box>
      <form
        className="donation-form"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "2.5rem",
        }}
      >
        <TextField
          id="filled-basic"
          placeholder="Other Amount (Taka)"
          value={donationAmount !== 0 ? donationAmount : ""}
          onChange={(e) => setDonationAmount(e.target.value)}
          variant="filled"
          sx={{
            color: "white",
          }}
          inputProps={{
            style: {
              textAlign: "center",
              padding: "1rem",
              fontSize: theme.typography.h6.fontSize,
            },
          }}
        />

        <Button
          variant="contained"
          type="submit"
          sx={{ alignSelf: "center", mt: "1rem" }}
        >
          Donate Now
        </Button>
      </form>
    </>
  );
}
