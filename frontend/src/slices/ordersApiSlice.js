import { apiSlice } from "./apiSlice";
import { ORDERS_URL, PAYPAL_URL } from "../constants";

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrderDetails: builder.query({
      query: (id) => ({
        url: `${ORDERS_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createOrder: builder.mutation({
      query: (data) => ({
        url: `${ORDERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    getOrders: builder.query({
      query: () => ({
        url: `${ORDERS_URL}`,
      }),
    }),
    payOrder: builder.mutation({
      query: ({ id, details }) => ({
        url: `${ORDERS_URL}/${id}/pay`,
        method: "PUT",
        body: { ...details },
      }),
    }),
    getPayPalClientId: builder.query({
      query: () => ({
        url: `${PAYPAL_URL}`,
      }),
      keepUnusedDataFor: 5,
    }),
    getMyOrders: builder.query({
      query: () => ({
        url: `${ORDERS_URL}/myorders`,
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
  useGetOrderDetailsQuery,
  useCreateOrderMutation,
  usePayOrderMutation,
  useGetPayPalClientIdQuery,
  useGetMyOrdersQuery,
  useUpdateOrderToDeliveredMutation,
} = ordersApiSlice;
