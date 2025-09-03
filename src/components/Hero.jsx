import { Button, Typography } from "@mui/material";

import heroImage from "../assets/images/hero.png";
import "../css/hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <p id="subtitle">Bangladesh 2.0</p>
        <Typography variant="h1" sx={{ letterSpacing: "0.5px" }}>
          Idea , innovation , vision and challenges in New Bangladesh.
        </Typography>

        <Button
          href="#"
          variant="contained"
          sx={{ mt: "1.5rem", width: { sm: "100%", xs: "100%", md: "auto" } }}
        >
          Explore New Bangladesh
        </Button>
      </div>
      <div className="hero-img">
        <img
          src={heroImage}
          alt="An image of the National Martyrs' Memorial with the flag of Bangladesh in front."
        />
      </div>
    </div>
  );
}
