import { Box, Link, Typography } from "@mui/material";

import FB from "../assets/images/facebook.png";
import Insta from "../assets/images/instagram.png";
import X from "../assets/images/x.png";

export default function Footer() {
  function createData(href, src, alt) {
    return { href, src, alt };
  }
  const links = [
    createData("#", FB, "Facebook-logo"),
    createData("#", Insta, "Insta-logo"),
    createData("#", X, "X-logo"),
  ];
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          fontFamily: "times new roman",
          p: "2rem",
          borderBottom: "1px solid #0e0e0e4d",
          width: "50%",
          textAlign: "center",
          mx: "auto",
        }}
      >
        Bangladesh 2.0
      </Typography>

      <Box
        id="links"
        sx={{
          display: "flex",
          margin: "auto",
          justifyContent: "space-around",
          py: "2rem",
          pr: "4rem",
          width: "50%",
        }}
      >
        {links.map((link, i) => {
          return (
            <Link key={i} href={link.href}>
              <img src={link.src} alt={link.alt} />
            </Link>
          );
        })}
      </Box>
    </>
  );
}
