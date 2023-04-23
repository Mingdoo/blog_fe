import { Grid } from "@mui/material";
import DailyActivity from "../src/components/dashboard/DailyActivity";
import React from "react";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  React.useEffect(() => {
    if (!localStorage.getItem("login")) {
      router.push("/signin");
    }
  }, []);
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={4}>
        <DailyActivity />
      </Grid>
    </Grid>
  );
}
