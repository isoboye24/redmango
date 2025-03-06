import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const AuthApi = createApi({
  reducerPath: 'AuthApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:7250/api/',
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: `/auth/register`,
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (userCredentials) => ({
        url: `/auth/login`,
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: userCredentials,
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = AuthApi;
export default AuthApi;
