import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";

export default function PollDropdown() {
  const [opinion, setOpinion] = useState("");

  const handleChange = (event) => {
    setOpinion(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="age-select-label">Opinion</InputLabel>
        <Select
          labelId="age-select-label"
          id="age-select"
          value={opinion}
          label="Opinion"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Yes I agree.</MenuItem>
          <MenuItem value={2}>Strongly agree</MenuItem>
          <MenuItem value={0}>Neutral</MenuItem>
          <MenuItem value={-1}>Disagree</MenuItem>
          <MenuItem value={-2}>Strongly disagree</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
