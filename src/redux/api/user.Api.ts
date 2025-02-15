import { tagTypes } from '../tag-types';
import { baseApi } from './baseApi';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingleUser: builder.query({
      query: () => ({
        url: '/user/me',
        method: 'GET',
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const { useGetSingleUserQuery } = userApi;
