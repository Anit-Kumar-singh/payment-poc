import React, { useState, useEffect } from "react";
// import "./Funds.css";
import currency from "../../constants/countries.json";
import { BsFillXCircleFill } from "react-icons/bs";
import { currencyValue } from "../../constants/currencyValue";
import { paymentModes } from "../../constants/payment-modes";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Stack,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "../Checkout";

const Funds = ({ selectedMethod }) => {
  const [data, setData] = useState(0);
  const [additionFields, SetAdditionFields] = useState([]);
  const [currencyType, setCurrencyType] = useState("Lek");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setCurrencyType(event.target.value);
  };

  const inputHandler = (e) => {
    e.preventDefault();
    setData(parseInt(e.target.value));
  };

  const addFundHandler = (e, value) => {
    e.preventDefault();
    setData(data + value);
  };

  const removeHandler = () => {
    setData(0);
  };

  useEffect(() => {
    const findFields = paymentModes.filter(
      (item) => item.id === selectedMethod
    );
    SetAdditionFields(findFields[0].fields);
  }, [selectedMethod]);

  return (
    <>
      <Card sx={{ maxWidth: 450 }}>
        <CardContent sx={{ minWidth: 332 }}>
          <br />
          <Typography variant="h1">Account {selectedMethod + 1}</Typography>
          <br />
          <FormControl sx={{ m: 1, minWidth: 332 }}>
            <InputLabel id="demo-controlled-open-select-label">
              Currency
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              value={currencyType}
              label="Currency"
              onChange={handleChange}
            >
              {currency.length > 0 &&
                currency.map(({ Symbol, Code, Flag, Currency }) => (
                  <MenuItem value={Currency} key={Symbol + Code}>
                    <img
                      src={`${Flag}`}
                      alt="flag"
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
            <TextField
              id="outlined-basic"
              label="Amount"
              variant="outlined"
              value={data}
              onChange={inputHandler}
            />
            {data ? (
              <BsFillXCircleFill
                className="close-btn"
                onClick={removeHandler}
              />
            ) : null}
            <br />
            <Stack direction="row" spacing={1}>
              {currencyValue.map((currency, idx) => (
                <Chip
                  key={idx}
                  color="primary"
                  label={`$${currency.value}`}
                  variant="outlined"
                  onClick={(e) => addFundHandler(e, currency.value)}
                />
              ))}
            </Stack>
            <br />
            {selectedMethod === 1 ? (
              <CheckoutForm />
            ) : (
              <>
                {additionFields.length > 0 &&
                  additionFields.map((item) => (
                    <TextField
                      key={item.id}
                      id="outlined-basic"
                      label={`${item.placeholder}`}
                      variant="outlined"
                      value=""
                      onChange={inputHandler}
                      sx={{ marginBottom: "1rem" }}
                    />
                  ))}
                <CardActions
                  style={{ justifyContent: "center", width: "100%" }}
                >
                  <Button
                    size="large"
                    variant="contained"
                    onClick={() => navigate("/payment-confirmation")}
                  >
                    Deposit Funds
                  </Button>
                </CardActions>
                <br />
              </>
            )}
          </FormControl>
        </CardContent>
        {/* <CardActions style={{ justifyContent: "center" }}>
          <Button
            size="large"
            variant="contained"
            onClick={() => navigate("/payment-confirmation")}
          >
            Deposit Funds
          </Button>
        </CardActions>
        <br /> */}
      </Card>
    </>
  );
};

export default Funds;
