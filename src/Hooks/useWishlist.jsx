import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosPublic from "./axiosPublic";
import toast from "react-hot-toast";

const useWishlist = () => {
  const queryClient = useQueryClient();

  const addWishlistMutation = useMutation({
    mutationFn: async ({ userId, productId }) => {
      const res = await axiosPublic.post("/wishlist", {
        userId,
        productId
      });
      return res.data;
    },
    onSuccess: (data, variables) => {
      toast.success(data.message);
      queryClient.invalidateQueries(["wishlist", variables.userId]);
    },
    onError: () => {
      toast.error("Failed to add to wishlist");
    }
  });

  const handleAddToWishlist = (wishlistData) => {
    addWishlistMutation.mutate(wishlistData);
  };

  return {
    handleAddToWishlist,
    isAddingToWishlist: addWishlistMutation.isPending
  };
};

export default useWishlist;
