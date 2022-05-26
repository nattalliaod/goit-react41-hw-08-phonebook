import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/contacts',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/',
      providesTags: ['Contact'],
    }),

    addContact: builder.mutation({
      query: ({ name, number }) => ({
        url: '/',
        method: 'POST',
        body: {
          name,
          number,
        },
      }),
      invalidatesTags: ['Contact'],
    }),

    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),

    editContact: builder.mutation({
      query: ({ name, number, id }) => {
        return {
          url: `/${id}`,
          method: 'PATCH',
          body: {
            name,
            number
          },
        }
      },
      invalidatesTags: ['Contact'],
    })
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useEditContactMutation,
} = contactsApi;