import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import CustomizedSnackbars from "../../component/Notification";
import TaxAccordion from "../../component/Tax";

const FundConfirmation = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, [10000]);
  });
  return (
    <Container maxWidth="lg">
      {open && <CustomizedSnackbars status={open} handler={setOpen} />}
      <br />
      <TaxAccordion />
    </Container>
  );
};

export default FundConfirmation;
