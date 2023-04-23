import { Grid } from "@mui/material";
import DailyActivity from "../src/components/dashboard/DailyActivity";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import indexImage from "../assets/images/users/index.jpg";

export default function Index() {
  const router = useRouter();
  React.useEffect(() => {
    if (!localStorage.getItem("login")) {
      router.push("/signin");
    }
  }, []);
  return (
    <Grid container spacing={0} justifyContent={"center"}>
      <Grid item xs={12} lg={12} maxWidth={300}>
        <Image src={indexImage} className="rounded-image border-image"></Image>
      </Grid>
      <Grid item xs={12} lg={12}>
        <DailyActivity />
      </Grid>
    </Grid>
  );
}
