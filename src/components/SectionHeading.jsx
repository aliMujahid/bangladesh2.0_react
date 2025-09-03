import { Box, Typography } from "@mui/material";

export default function SectionHeading({ section }) {
  return (
    <Box
      className="section-heading"
      component="div"
      sx={{
        my: "2.5rem",
      }}
    >
      <Typography variant="h2">{section.title}</Typography>
      {section.description && (
        <Typography sx={{ mt: "1rem" }}>{section.description}</Typography>
      )}
    </Box>
  );
}
