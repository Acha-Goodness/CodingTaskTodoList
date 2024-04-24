import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { todoSlice } from "./todoApiSlice";

export const store = configureStore({
    reducer: {
        [todoSlice.reducerPath] : todoSlice.reducer
    },

    middleware: ( getDefaultMiddleware ) => 
        getDefaultMiddleware({ immutableCheck: false, serializableCheck: false,})
        .concat(todoSlice.middleware)
    
})

setupListeners(store.dispatch);