import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { todoApi } from "../api/todoApi/todoApi";
import { reviewsApi } from "../api/reviewsApi/reviewsApi";
import { mansApi } from "../api/mansApi/mansApi";
import { kidsApi } from "../api/kidsApi/kidsApi";

export const store = configureStore({
    reducer:{
        [todoApi.reducerPath]:todoApi.reducer,
        [reviewsApi.reducerPath]:reviewsApi.reducer,
        [mansApi.reducerPath]:mansApi.reducer,
        [kidsApi.reducerPath]:kidsApi.reducer,
    },

    middleware:(getDefaultMiddleware)=>
            getDefaultMiddleware().concat(todoApi.middleware, reviewsApi.middleware, mansApi.middleware, kidsApi.middleware),
    
})

setupListeners(store.dispatch)