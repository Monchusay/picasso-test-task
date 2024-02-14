import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post, PostResponse } from "../types/types";

export const postsApi = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostResponse, number>({
      query: (offset) => ({
        url: "/posts",
        params: {
          _limit: 30,
          _start: offset,
        },
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return Number(currentArg) > Number(previousArg);
      },
    }),
    getSinglePost: builder.query<Post, string>({
      query: (postId) => `/posts/${postId}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetSinglePostQuery } = postsApi;
