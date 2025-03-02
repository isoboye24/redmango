import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const menuItemApi = createApi({
  reducerPath: 'menuItemApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:7250/swagger/index_html',
  }),
  tagTypes: ['menuItems'],
  endpoints: (builder) => ({
    getMenuItems: builder.query({
      query: () => ({
        url: 'menuItem',
      }),
      providesTags: ['menuItems'],
    }),
    getMenuItemById: builder.query({
      query: (id) => ({
        url: `menuItem/${id}`,
      }),
      providesTags: ['menuItems'],
    }),
  }),
});

export const { useGetMenuItemsQuery, useGetMenuItemByIdQuery } = menuItemApi;
export default menuItemApi;
