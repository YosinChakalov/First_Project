import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviewsApi = createApi({
    reducerPath: "reviewsApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/reviews' }),
    tagTypes:["reviews"],
    endpoints: (builder) => ({
        getReviews: builder.query({
            query: () => "",
            providesTags:["reviews"],
        }),
    }),
});

export const { useGetReviewsQuery } = reviewsApi;
