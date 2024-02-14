import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blog",
  baseQuery: fetchBaseQuery({ baseUrl: "https://is.skdesign.ru/api" }),
  endpoints: (builder) => ({}),
});

export const { } = blogApi;
