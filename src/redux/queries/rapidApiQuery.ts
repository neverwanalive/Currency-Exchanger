import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ExchangeDTO {
  fromCurrency: string;
  toCurrency: string;
}

export const baseApi = createApi({
  reducerPath: "",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://currency-exchange.p.rapidapi.com/",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5989104eb7msh2fed7996e20ef1ap103dcbjsnfc70de5e73f4",
      "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
    },
  }),
  endpoints: (builder) => ({
    getList: builder.query<Array<string>, void>({
      query: () => `listquotes`,
    }),
    getExchange: builder.query<number, ExchangeDTO>({
      query: ({ fromCurrency, toCurrency }) =>
        `exchange?from=${fromCurrency}&to=${toCurrency}`,
    }),
  }),
});

export const { useGetListQuery, useGetExchangeQuery } = baseApi;
