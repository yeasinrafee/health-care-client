import { TMeta } from '@/types';
import { tagTypes } from '../tag-types';
import { baseApi } from './baseApi';

const scheduleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSchedule: build.mutation({
      query: (data) => ({
        url: '/schedule',
        method: 'POST',
        contentType: 'multipart/form-data',
        data,
      }),
      invalidatesTags: [tagTypes.schedule],
    }),

    getAllSchedules: build.query({
      query: (arg: Record<string, any>) => ({
        url: '/schedule',
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: [], meta: TMeta) => {
        return {
          doctors: response,
          meta,
        };
      },
      providesTags: [tagTypes.schedule],
    }),

    deleteSpecialty: build.mutation({
      query: (id) => ({
        url: `/schedule/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.schedule],
    }),
  }),
});

export const {
  useCreateScheduleMutation,
  useGetAllSchedulesQuery,
  useDeleteSpecialtyMutation,
} = scheduleApi;
