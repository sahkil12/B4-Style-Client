import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axiosPublic from "./axiosPublic";
import UseAuth from "./UseAuth";

const useCart = () => {
     const queryClient = useQueryClient();
     const { user } = UseAuth();
     const userId = user?.uid;

     // GET cart
     const { data: cart = [], isPending } = useQuery({
          queryKey: ["cart", userId],
          enabled: !!userId,
          queryFn: async () => {
               const res = await axiosPublic.get(`/cart/${userId}`);
               return res.data;
          }
     });
     // ADD to cart
     const addToCartMutation = useMutation({
          mutationFn: async ({ userId, productId, quantity, size }) => {
               const res = await axiosPublic.post("/cart", {
                    userId,
                    productId,
                    quantity,
                    size
               });
               return res.data;
          },
          onSuccess: (data, variables) => {
               toast.success(data.message);
               queryClient.invalidateQueries(["cart", variables.userId]);
          },
          onError: () => {
               toast.error("Failed to add to cart");
          }
     });

     const handleAddToCart = (cartData) => {
          addToCartMutation.mutate(cartData);
     };

     return {
          cart,
          handleAddToCart,
          isCartLoading: isPending,
          isAddingToCart: addToCartMutation.isPending
     };
};

export default useCart;
