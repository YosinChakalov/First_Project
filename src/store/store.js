import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { todoApi } from "../api/todoApi/todoApi";
import { reviewsApi } from "../api/reviewsApi/reviewsApi";

export const store = configureStore({
    reducer:{
        [todoApi.reducerPath]:todoApi.reducer,
        [reviewsApi.reducerPath]:reviewsApi.reducer,
    },

    middleware:(getDefaultMiddleware)=>
            getDefaultMiddleware().concat(todoApi.middleware, reviewsApi.middleware),
    
})

setupListeners(store.dispatch)