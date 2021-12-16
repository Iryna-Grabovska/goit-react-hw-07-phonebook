import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://61b7c58b64e4a10017d18c91.mockapi.io/api/vi/' }),
  tagTypes :['Contacts'],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query:()=>`/contacts`,
      providesTags: ['Contacts'],
    }),
    deleteContacts: builder.mutation({
      query: id=>({
        url : `/contacts/${id}`,
        method: 'DELETE',
      }),
       invalidatesTags: ['Contacts'],
    }),
    createContacts: builder.mutation({
      query: newContacts=>({
        url : `/contacts`,
        method: 'POST',
        body: newContacts,
      }),
       invalidatesTags: ['Contacts'],

    })
  }),
})

export const { useFetchContactsQuery , useDeleteContactsMutation, useCreateContactsMutation } = contactsApi
