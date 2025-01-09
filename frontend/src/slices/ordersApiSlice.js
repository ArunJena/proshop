import { apiSlice } from "./apiSlice";
import { ORDERS_URL } from "../constants";

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => ({
        url: `${ORDERS_URL}`,
      }),
    }),
    getOrder: builder.query({
      query: (id) => ({
        url: `${ORDERS_URL}/${id}`,
      }),
    }),
    createOrder: builder.mutation({
      query: (data) => ({
        url: `${ORDERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    updateOrderToPaid: builder.mutation({
      query: (id, data) => ({
        url: `${ORDERS_URL}/${id}/pay`,
        method: "PUT",
        body: data,
      }),
    }),
    updateOrderToDelivered: builder.mutation({
      query: (id, data) => ({
        url: `${ORDERS_URL}/${id}/deliver`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useGetOrderQuery,
  useCreateOrderMutation,
  useUpdateOrderToPaidMutation,
  useUpdateOrderToDeliveredMutation,
} = ordersApiSlice;
