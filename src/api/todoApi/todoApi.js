import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    tagTypes:["todos"],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => "data",
            providesTags:["todos"],
        }),
        getUsers: builder.query({
            query: () => "user",
            providesTags:["todos"],
        })
    }),
});

export const { useGetTodosQuery, useGetUsersQuery } = todoApi;