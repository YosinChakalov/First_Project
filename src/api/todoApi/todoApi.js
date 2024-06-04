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
        }),
        getBlogs: builder.query({
            query: () => "blog",
            providesTags:["todos"],
        }),
        getForHome: builder.query({
            query: () => "forHome",
            providesTags:["todos"],
        }),
        getForBeauty: builder.query({
            query: () => "forBeautyAndHealth",
            providesTags:["todos"],
        }),
        getLicvidation: builder.query({
            query: () => "licvidation",
            providesTags:["todos"],
        })
    }),
});

export const { useGetTodosQuery, useGetUsersQuery, useGetBlogsQuery, useGetForHomeQuery, useGetForBeautyQuery, useGetLicvidationQuery } = todoApi;