import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const base_url = process.env.BASE_URL;

export const todoSlice = createApi({
    reducerPath:"todoSlice",
    baseQuery: fetchBaseQuery({baseUrl: "https://127.0.0.1:5000/api/v1/todo"}),
    tagTypes: ["Todos"],
    endpoints: ( builder ) => ({
        getAllTodo: builder.query({
            query: () => "/getAllTodo",
            method: "GET",
            providesTags: ["Todos"],
        }),

        createTodo: builder.mutation({
            query: ( payload ) => {
                return{
                    url:"/createTodo",
                    method:"POST",
                    body:payload,
                    headers:{
                        "Content-type" : "application/json"
                    }
                }
            },
            invalidatesTags: ["Todos"],
        }),



    })
})

export const { useGetAllTodoQuery, useCreateTodoMutation } = todoSlice;