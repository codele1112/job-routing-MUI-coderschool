import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Skills from "./Skills";

export default function BasicCard({ job }) {
  console.log(job);
  return (
    <Card sx={{}}>
      <CardContent>
        <Typography variant="h5" component="div">
          {job.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {job.city}
        </Typography>
        <Skills job={job.skills} />

        <Typography variant="body2">{job.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
