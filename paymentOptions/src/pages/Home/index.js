import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import PaymentMethod from "../Payment";
import Funds from "../Funds";

const Home = () => {
  const [active, setActive] = useState(0);
  const activeHandler = (index) => {
    setActive(index);
  };
  return (
    <Container maxWidth="xl">
      <Grid
        container
        maxWidth="xl"
        spacing={0}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <PaymentMethod handler={activeHandler} active={active} />
        </Grid>
        <Grid item>
          <Funds selectedMethod={active} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
