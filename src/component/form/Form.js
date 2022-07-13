import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Form() {
  return (
    <Box  sx={{ "& > :not(style)": { m: 1 } }}>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <TextField id="input-with-sx" label="With sx" variant="standard" />
      </Box>
    </Box>
  );
}
