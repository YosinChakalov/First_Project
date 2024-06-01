import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/data' }),
    tagTypes:["todos"],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => "",
            providesTags:["todos"],
        }),
    }),
});

export const { useGetTodosQuery } = todoApi;