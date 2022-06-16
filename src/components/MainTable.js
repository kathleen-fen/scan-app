import React from "react";
import Grid from "@mui/material/Grid";
import { Paper, Box } from "@mui/material";

import { useWorkingList } from "../context/WorkingList";

const MainTable = () => {
  const { workingList } = useWorkingList();
  return (
    <Box>
      {Object.keys(workingList).map((item) => (
        <Grid key={item} container spacing={2} sx={{ py: 2 }}>
          <Grid item xs={8}>
            <Paper>{item}</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>{workingList[item].amount}</Paper>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default MainTable;
