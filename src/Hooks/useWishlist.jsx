import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosPublic from "./axiosPublic";
import toast from "react-hot-toast";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useWishlist = () => {
     const queryClient = useQueryClient();
     const { user } = useAuth()
     const userId = user?.uid
     const axiosSecure = useAxiosSecure()


     const { data: wishlist = [], isPending: wishlistLoad } = useQuery({
          queryKey: ["wishlist", userId],
          enabled: !!userId,
          queryFn: async () => {
               const res = await axiosSecure.get(`/wishlist`);
               return res.data
          }
     });

     const wishlistCount = wishlist?.length

     // add wishlist
     const addWishlistMutation = useMutation({
          mutationFn: async ({ productId }) => {
               const res = await axiosSecure.post("/wishlist", {
                    userId,
                    productId
               });
               return res;
          },
          onSuccess: (res) => {
               toast.success(res.data.message, { duration: 1000 });
               queryClient.invalidateQueries(["wishlist", userId]);
          },
          onError: () => {
               toast.error("Failed to add to wishlist", { duration: 1000 });
          }
     });
     // Remove wishlist
     const removeWishlistMutation = useMutation({
          mutationFn: async (productId) => {
               return axiosSecure.delete("/wishlist", {
                    data: {
                         userId,
                         productId
                    }
               });
          },
          onSuccess: (res) => {
               toast.success(res.data.message, { duration: 1000 });
               queryClient.invalidateQueries(["wishlist", userId]);
          },
          onError: () => {
               toast.error("Failed to add to wishlist", { duration: 1000 });
          }
     });
     // clear all wishlist 
     const clearWishlistMutation = useMutation({
          mutationFn: async () => {
               return axiosSecure.delete(`/wishlist/clear`);
          },
          onSuccess: (res) => {
               toast.success(res.data.message, { duration: 1000 });
               queryClient.invalidateQueries(["wishlist", userId]);
          },
          onError: () => {
               toast.error("Failed to clear wishlist", { duration: 1000 });
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
