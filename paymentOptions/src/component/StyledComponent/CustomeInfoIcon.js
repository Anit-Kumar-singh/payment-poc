import React from "react";
import { styled } from "@mui/material";
import { Info as InfoIcon } from "@mui/icons-material";

export const CustomInfoIcon = styled((props) => <InfoIcon {...props} />)(
  ({ theme }) => ({
    color: `${theme.palette.primary.main}`,
  })
);
