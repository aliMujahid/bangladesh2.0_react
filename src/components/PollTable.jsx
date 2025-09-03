import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";

import PollDropdown from "./PollDropdown";

export default function PollTable({ questions }) {
  return (
    <TableContainer
      sx={{
        bgcolor: "white",
        py: "3rem",
        borderRadius: "1rem",
      }}
      component={Paper}
      className="questions-table"
    >
      <Table sx={{ width: "94%", border: "1px solid #0e0e0e26", m: "auto" }}>
        <TableHead sx={{ bgcolor: "success.light" }}>
          <TableRow>
            <TableCell>Questions</TableCell>
            <TableCell>Select Your Opinion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {questions.map((q, i) => {
            return (
              <TableRow key={i}>
                <TableCell>
                  <p>{q}</p>
                </TableCell>
                <TableCell>
                  {/* <div className="select-options">
                    Yes I agree. <i className="options"></i>
                    <div className="options-list">
                      <p>Strongly agree</p>
                      <p>Neutral</p>
                      <p>Disagree</p>
                      <p>Strongly disagree</p>
                    </div>
                  </div> */}
                  <PollDropdown />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
