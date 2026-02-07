import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosPublic from "./axiosPublic";
import toast from "react-hot-toast";
import UseAuth from "./UseAuth";

const useWishlist = () => {
     const queryClient = useQueryClient();
     const { user } = UseAuth()
     const userId = user?.uid

     const { data: wishlist = [], isPending: wishlistLoad } = useQuery({
          queryKey: ["wishlist", userId],
          enabled: !!userId,
          queryFn: async () => {
               const res = await axiosPublic.get(`/wishlist/${userId}`);
               return res.data
          }
     });

     const wishlistCount = wishlist?.length

     // add wishlist
     const addWishlistMutation = useMutation({
          mutationFn: async ({ productId }) => {
               const res = await axiosPublic.post("/wishlist", {
                    userId,
                    productId
               });
               return res;
          },
          onSuccess: (res) => {
               toast.success(res.data.message);
               queryClient.invalidateQueries(["wishlist", userId]);
          },
          onError: () => {
               toast.error("Failed to add to wishlist");
          }
     });
     // Remove wishlist
     const removeWishlistMutation = useMutation({
          mutationFn: async (productId) => {
               return axiosPublic.delete("/wishlist", {
                    data: {
                         userId,
                         productId
                    }
               });
          },
          onSuccess: (res) => {
               toast.success(res.data.message);
               queryClient.invalidateQueries(["wishlist", userId]);
          },
          onError: () => {
               toast.error("Failed to add to wishlist");
          }
     });
     // 
     const clearWishlistMutation = useMutation({
          mutationFn: async () => {
               return axiosPublic.delete(`/wishlist/clear/${userId}`);
          },
          onSuccess: (res) => {
               toast.success(res.data.message);
               queryClient.invalidateQueries(["wishlist", userId]);
          },
          onError: () => {
               toast.error("Failed to clear wishlist");
          }
     });

     const handleAddToWishlist = (wishlistData) => {
          addWishlistMutation.mutate(wishlistData);
     };
     const handleRemoveWishlist = (wishlistData) => {
          removeWishlistMutation.mutate(wishlistData?.productId)
     };


     return {
          handleAddToWishlist,
          handleRemoveWishlist,
          clearWishlist: clearWishlistMutation.mutate,
          wishlistLoad,
          isWishlistLoading:
               addWishlistMutation.isPending ||
               removeWishlistMutation.isPending ||
               clearWishlistMutation.isPending,
          wishlist,
          wishlistCount
     };
};

export default useWishlist;
