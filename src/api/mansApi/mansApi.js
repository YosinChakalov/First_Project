import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mansApi = createApi({
    reducerPath: "mansApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/mans' }),
    tagTypes:["mans"],
    endpoints: (builder) => ({
        getMans: builder.query({
            query: () => "",
            providesTags:["mans"],
        }),
    }),
});

export const { useGetMansQuery } = mansApi;
