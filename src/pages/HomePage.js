import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import JobCart from "../components/JobCart";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

import jobs from "../jobs.json";

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);

  const PER_PAGE = 5;
  const offset = currentPage * PER_PAGE;
  console.log("offset", offset);
  console.log(offset + PER_PAGE);
  const pageCount = Math.ceil(jobs.length / PER_PAGE);

  return (
    <Container>
      <Grid container spacing={2}>
        {jobs.slice(offset - PER_PAGE, offset).map((job, index) => (
          <Grid key={index} item xs={12} md={4} mt={3}>
            <JobCart job={job} />
          </Grid>
        ))}
      </Grid>

      <Stack
        spacing={2}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={5}
        mb={5}
      >
        <Pagination
          count={pageCount}
          onChange={(e, value) => setCurrentPage(value)}
        />
      </Stack>
    </Container>
  );
}

export default HomePage;
