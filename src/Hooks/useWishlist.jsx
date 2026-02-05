import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosPublic from "./axiosPublic";
import toast from "react-hot-toast";
import UseAuth from "./UseAuth";

const useWishlist = () => {
     const queryClient = useQueryClient();
     const { user } = UseAuth()
     const userId = user?.uid

     const { data: wishlist = [] } = useQuery({
          queryKey: ["wishlist", userId],
          enabled: !!userId,
          queryFn: async () => {
               const res = await axiosPublic.get(`/wishlist/${userId}`);
               return res.data
          }
     });
     // add wishlist
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
          isAddingToWishlist: addWishlistMutation.isPending,
          wishlist
     };
};

export default useWishlist;
