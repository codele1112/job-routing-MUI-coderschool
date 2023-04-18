import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";

export default function ColorChips({ job }) {
  return (
    <Stack spacing={0}>
      <Stack direction="row" spacing={0.5}>
        <Grid container spacing={0.5}>
          {job.slice(0, 4).map((skill, index) => (
            <Grid key={index} item>
              <Chip label={skill} color="primary" />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
}
