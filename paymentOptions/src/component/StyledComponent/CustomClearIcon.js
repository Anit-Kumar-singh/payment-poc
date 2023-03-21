import React from "react";
import { styled } from "@mui/material";
import { Clear as ClearIcon } from "@mui/icons-material";

export const CustomClearIcon = styled((props) => (
  <ClearIcon {...props} onClick={() => props.handler(!props.status)} />
))(({ theme }) => ({
  color: `${theme.palette.primary.light}`,
  position: "absolute",
  top: "-2.5rem",
  cursor: "pointer",
}));
