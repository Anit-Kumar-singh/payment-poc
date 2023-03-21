import React from "react";
import { Typography, Button, Grid } from "@mui/material";
import { CustomInfoIcon } from "../StyledComponent/CustomeInfoIcon";
import { CustomClearIcon } from "../StyledComponent/CustomClearIcon";

const Notification = ({ status, handler }) => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      sx={{
        backgroundColor: "#FFF8EA",
        marginTop: "1rem",
        padding: "1rem 0 1rem 2.5rem",
        borderRadius: ".2rem",
      }}
    >
      <Grid item xl={11}>
        <Grid container alignContent="center" justifyContent="flex-start">
          <Grid item>
            <CustomInfoIcon />
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h1" fontSize={19}>
              Your funds are being processed. You'll receive a confirmation once
              done.
            </Typography>

            <Typography gutterBottom>
              Estimate processing time 10 seconds.
            </Typography>
            <Button> Refresh</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} md={1}>
        <div style={{ position: "relative" }}>
          <CustomClearIcon status={status} handler={handler} />
        </div>
      </Grid>
    </Grid>
  );
};

export default Notification;
