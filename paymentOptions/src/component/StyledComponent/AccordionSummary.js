import React from "react";
import { AccordionSummary as MuiAccordionSummary, styled } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.other.light,

  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));
