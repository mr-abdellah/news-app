import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsAPI = createApi({
  reducerPath: "News",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://newsapi.org/v2/top-headlines?apiKey=85a09631092545f88402eaa5a9ff6cd3&",
  }),
  endpoints: (builder) => ({
    allNews: builder.query({
      query: () => ({
        url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=85a09631092545f88402eaa5a9ff6cd3",
      }),
    }),
    topNews: builder.query({
      query: () => "&category=general",
    }),
    businessNews: builder.query({
      query: () => "&category=business",
    }),
    scienceNews: builder.query({
      query: () => "&category=science",
    }),
    sportsNews: builder.query({
      query: () => "&category=sports",
    }),
    technologyNews: builder.query({
      query: () => "&category=technology",
    }),
  }),
});

export default newsAPI;

export const {
  useAllNewsQuery,
  useBusinessNewsQuery,
  useTopNewsQuery,
  useTechnologyNewsQuery,
  useScienceNewsQuery,
  useSportsNewsQuery,
} = newsAPI;
