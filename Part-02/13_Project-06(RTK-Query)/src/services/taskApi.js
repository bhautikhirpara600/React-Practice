import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const taskApi = createApi({
    reducerPath: 'taskApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    tagTypes: ['Tasks'],
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => ({
                url: '/tasks',
                method: 'GET'
            }),
            providesTags: ['Tasks'],
            transformResponse: (response) => response.reverse()
        }),
        addTask: builder.mutation({
            query: (task) => ({
                url: `/tasks`,
                method: 'POST',
                body: task
            }),
            invalidatesTags: ['Tasks'],
            onQueryStarted: async(task, { dispatch, queryFulfilled }) => {
                const patchResult = dispatch(
                    taskApi.util.updateQueryData('getTasks', undefined, (draft) => {
                        draft.unshift({id: crypto.randomUUID() ,...task})
                    })
                )

                try {
                    await queryFulfilled
                } catch {
                    patchResult.undo()
                }
            }
        }),
        updateTask: builder.mutation({
            query: ({id, ...updatedTask}) => ({
                url: `/tasks/${id}`,
                method: 'PATCH',
                body: updatedTask
            }),
            invalidatesTags: ['Tasks'],
            onQueryStarted: async({ id, ...updatedTask }, { dispatch, queryFulfilled }) => {
                const patchResult = dispatch(
                    taskApi.util.updateQueryData('getTasks', undefined, (draft) => {
                        const taskIndex = draft.findIndex((task) => task.id === id)
                        if(taskIndex !== -1) {
                            draft[taskIndex] = {...draft[taskIndex], ...updatedTask}
                        }
                    })
                )

                try {
                    await queryFulfilled
                } catch {
                    patchResult.undo()
                }
            }
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Tasks'],
            onQueryStarted: async(id, { dispatch, queryFulfilled }) => {
                const patchResult = dispatch(
                    taskApi.util.updateQueryData('getTasks', undefined, (draft) => {
                        const taskIndex = draft.findIndex((task) => task.id === id)
                        if(taskIndex !== -1) {
                            draft.splice(taskIndex, 1)
                        }
                    })
                )

                try {
                    await queryFulfilled
                } catch {
                    patchResult.undo()
                }
            }
        })
    })
})

export const { useGetTasksQuery, useAddTaskMutation, useUpdateTaskMutation, useDeleteTaskMutation } = taskApi