import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axiosPublic from "./axiosPublic";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
     const queryClient = useQueryClient();
     const { user } = useAuth();
     const userId = user?.uid;
     const axiosSecure = useAxiosSecure()

     // GET cart
     const { data: cart = [], isPending } = useQuery({
          queryKey: ["cart", userId],
          enabled: !!userId,
          queryFn: async () => {
               const res = await axiosSecure.get("/cart");
               return res.data;
          }
     });
     // total cart quantity
     const cartQuantity = cart?.reduce(
          (sum, item) => sum + item?.quantity, 0
     )
     // UPDATE QUANTITY
     const updateCartQuantity = useMutation({
          mutationFn: ({ cartItemId, type }) =>
               axiosSecure.patch("/cart/quantity", { cartItemId, type }),

          onSuccess: () => {
               queryClient.invalidateQueries(["cart", user?.uid])
          },
     })
     // REMOVE SINGLE ITEM
     const removeCartItem = useMutation({
          mutationFn: (cartItemId) =>
               axiosSecure.delete(`/cart/${cartItemId}`),

          onSuccess: (res) => {
               toast.success(res?.data?.message, { duration: 1000 });
               queryClient.invalidateQueries(["cart", user?.uid])
          },
          onError: (err) => {
               const msg = err?.response?.data?.message || "Failed to remove item";
               toast.error(msg, { duration: 1000 });
          }
     })
     // clear all cart api
     const clearAllCart = useMutation({
          mutationFn: () =>
               axiosSecure.delete(`/cart/clear`),

          onSuccess: (res) => {
               toast.success(res?.data?.message, { duration: 1000 });
               queryClient.invalidateQueries(["cart", userId])
          },
          onError: (err) => {
               const msg = err?.response?.data?.message || "Failed to clear cart";
               toast.error(msg, { duration: 1000 });
          }
     })
     // ADD to cart
     const addToCartMutation = useMutation({
          mutationFn: async ({ productId, quantity, size }) => {
               const res = await axiosSecure.post("/cart", {
                    productId,
                    quantity,
                    size
               });
               return res.data;
          },
          onSuccess: (data, variables) => {
               toast.success(data.message, { duration: 1000 });
               queryClient.invalidateQueries(["cart", variables.userId]);
          },
          onError: (err) => {
               const status = err?.response?.status;
               const msg = err?.response?.data?.message;

               if (status === 400) {
                    toast.error(msg || "Product quantity not available!", { duration: 1000 });
               } else {
                    toast.error(msg || "Failed to add to cart", { duration: 1000 });
               }
          }
     });

     const handleAddToCart = (cartData) => {
          addToCartMutation.mutate(cartData);
     };

     return {
          cart,
          handleAddToCart,
          isCartLoading: isPending,
          isAddingToCart: addToCartMutation.isPending,
          updateCartQuantity,
          updateCartQuantityLoading: updateCartQuantity.isPending,
          removeCartItem,
          removeCartLoad: removeCartItem.isPending,
          clearAllCart,
          clearCartLoading: clearAllCart.isPending,
          cartQuantity
     };
};

export default useCart;
