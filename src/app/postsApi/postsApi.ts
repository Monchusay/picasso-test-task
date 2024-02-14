import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({ baseUrl: "https://is.skdesign.ru/api" }),
  endpoints: (builder) => ({}),
});

export const { } = postsApi;
