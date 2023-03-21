import React, { useState } from "react";
import {
  AccordionDetails,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import { Accordion } from "../StyledComponent/Accordion";
import { AccordionSummary } from "../StyledComponent/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import currency from "../../constants/countries.json";

const TaxAccordion = () => {
  const [expanded, setExpanded] = useState("panel1");
  const [currencyType, setCurrencyType] = useState("Lek");
  const [taxID, setTaxID] = useState();
  const [open, setOpen] = useState(false);
  const [taxData, setTaxData] = useState([
    { id: 1, currency: currencyType, taxID },
  ]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const AddMoreField = () => {
    const taxObj = {
      id: Math.random(),
      currency: currencyType,
      taxID,
    };
    setTaxData([...taxData, taxObj]);
  };

  const editField = (e, index) => {
    const findItem = taxData.filter((i) => i.id === parseInt(index));
    console.log("fasa", findItem);
    setCurrencyType(e.target.value);
  };

  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Tax ID</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <br />
            Please note, You need to verify your Tax ID within 30 days, to keep
            account active.
          </Typography>
          <br />

          <Grid
            container
            alignContent="center"
            justifyContent="space-between"
            spacing={0.9}
          >
            {taxData &&
              taxData.map((t) => {
                return (
                  <FormControl sx={{ mt: 3, width: "100%" }} key={t.id}>
                    <Grid
                      container
                      alignContent="center"
                      justifyContent="space-between"
                      spacing={0.9}
                    >
                      <Grid item lg={6} marginTop=".9rem" width="100%">
                        <InputLabel id={`currency-label-${t.id}`}>
                          Currency
                        </InputLabel>
                        <Select
                          labelId={`currency-label-${t.id}`}
                          id={`currency-select-label-${t.id}`}
                          open={open}
                          onClose={() => setOpen(false)}
                          onOpen={() => setOpen(true)}
                          value={t.currency}
                          label="Currency"
                          onChange={(e) => editField(e, t.id)}
                          sx={{
                            width: "100%",
                          }}
                        >
                          {currency.length > 0 &&
                            currency.map(({ Symbol, Code, Flag, Currency }) => (
                              <MenuItem value={Currency} key={Symbol + Code}>
                                <img
                                  src={`${Flag}`}
                                  alt="country flag"
                                  width="20px"
                                  height="20px"
                                />
                                <Typography variant="p" component="span">
                                  {" "}
                                  {Currency}
                                </Typography>
                              </MenuItem>
                            ))}
                        </Select>
                        <br />
                      </Grid>
                      <Grid item md={6} marginTop=".9rem" width="100%">
                        <TextField
                          label="Tax ID"
                          value={taxID}
                          onChange={(e) => setTaxID(e.target.value)}
                          sx={{
                            width: "100%",
                            height: "100%",
                          }}
                        ></TextField>
                      </Grid>
                    </Grid>
                  </FormControl>
                );
              })}

            <Grid item lg={6}>
              <Button
                variant="outlined"
                sx={{
                  width: "100%",
                  height: "50px",
                  borderColor: "silver",
                  marginTop: "1rem",
                }}
                onClick={AddMoreField}
              >
                {" "}
                Add Another
              </Button>
            </Grid>
            <Grid item lg={6}>
              <Button
                variant="contained"
                sx={{
                  width: "99%",
                  height: "50px",
                  borderColor: "silver",
                  marginTop: "1rem",
                }}
              >
                {" "}
                Confirm
              </Button>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default TaxAccordion;
