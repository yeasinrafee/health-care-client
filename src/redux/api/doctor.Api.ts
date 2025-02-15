import { TMeta } from '@/types';
import { tagTypes } from '../tag-types';
import { baseApi } from './baseApi';
import { TDoctor } from '@/types/doctor';

const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDoctor: build.mutation({
      query: (data) => ({
        url: '/user/create-doctor',
        method: 'POST',
        contentType: 'multipart/form-data',
        data,
      }),
      invalidatesTags: [tagTypes.doctor],
    }),

    getAllDoctors: build.query({
      query: (arg: Record<string, any>) => ({
        url: '/doctor',
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: TDoctor[], meta: TMeta) => {
        return {
          doctors: response,
          meta,
        };
      },
      providesTags: [tagTypes.doctor],
    }),

    getDoctor: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/doctor/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.doctor],
    }),

    updateDoctor: build.mutation({
      query: (data) => ({
        url: `/doctor/${data.id}`,
        method: 'PATCH',
        data: data.body,
      }),
      invalidatesTags: [tagTypes.doctor],
    }),

    deleteDoctor: build.mutation({
      query: (id) => ({
        url: `/doctor/soft/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.doctor],
    }),
  }),
});

export const {
  useCreateDoctorMutation,
  useGetAllDoctorsQuery,
  useDeleteDoctorMutation,
  useGetDoctorQuery,
  useUpdateDoctorMutation,
} = doctorApi;
