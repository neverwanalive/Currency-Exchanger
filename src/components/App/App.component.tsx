import React, { useState, useEffect } from "react";
import {
  InputLabel,
  MenuItem,
  Select,
  TextField,
  SelectChangeEvent,
} from "@mui/material";
import { Container, Modal, Box, FormControl, Title, Main } from "./App.styles";
import {
  useGetListQuery,
  useGetExchangeQuery,
} from "../../redux/queries/rapidApiQuery";
//lol
export const App: React.FC = () => {
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("RUB");
  const [fromCurrencyValue, setFromCurrencyValue] = useState<number>(1);
  const [toCurrencyValue, setToCurrencyValue] = useState<number>();

  const { data: list } = useGetListQuery();
  const { data: exValue } = useGetExchangeQuery({
    fromCurrency,
    toCurrency,
  });

  const handleSetFromCurrency = (event: SelectChangeEvent) => {
    setFromCurrency(event.target.value as string);
  };

  const handleSetToCurrency = (event: SelectChangeEvent) => {
    setToCurrency(event.target.value as string);
  };

  const handleFromCurrencyValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFromCurrencyValue(+event.target.value);
  };

  const handleToCurrencyValue = (value: number) => {
    setToCurrencyValue(value as number);
  };

  useEffect(() => {
    exValue &&
      handleToCurrencyValue(Number((exValue * fromCurrencyValue).toFixed(2)));
  }, [fromCurrencyValue, exValue]);

  return (
    <Main>
      <Title>Currency Exchanger</Title>
      <Container>
        <Modal>
          <Box>
            <FormControl>
              <InputLabel id="demo-simple-select-label">From</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={fromCurrency}
                label="From"
                onChange={handleSetFromCurrency}
              >
                {list?.map((item) => (
                  <MenuItem value={`${item}`}>{item}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Value"
              variant="outlined"
              onChange={handleFromCurrencyValue}
              type="number"
              value={fromCurrencyValue}
            />
          </Box>
          <Box>
            <FormControl>
              <InputLabel id="demo-simple-select-label">To</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={toCurrency}
                label="To"
                onChange={handleSetToCurrency}
              >
                {list?.map((item) => (
                  <MenuItem value={`${item}`}>{item}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={toCurrencyValue}
            />
          </Box>
        </Modal>
      </Container>
    </Main>
  );
};
