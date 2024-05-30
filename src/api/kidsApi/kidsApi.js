import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const kidsApi = createApi({
    reducerPath: "kidsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/kids" }),
    tagTypes: ['kids'],
    endpoints: (builder) => ({
        getKids: builder.query({
            query: () => "",
            providesTags: ['kids'],
        }),
    })
})

export const { useGetKidsQuery } = kidsApi