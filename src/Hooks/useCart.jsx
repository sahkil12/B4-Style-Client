import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axiosPublic from "./axiosPublic";

const useCart = () => {
     const queryClient = useQueryClient();

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
          handleAddToCart,
          isAddingToCart: addToCartMutation.isPending
     };
};

export default useCart;
