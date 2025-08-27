import { baseApi } from "./baseApi";


export const overviewApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        getOverview: builder.query({
        query: () => ({
            url: "/dashboard/overview/",
            method: "GET",
        }),
        providesTags: ["Overview"],
        }),
    }),
})

export const { useGetOverviewQuery } = overviewApi; 