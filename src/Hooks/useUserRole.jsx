import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useUserRole = () => {

     const { user } = useAuth();
     const axiosSecure = useAxiosSecure();

     const { data: role, isLoading, error } = useQuery({
          queryKey: ["user-role", user?.email],
          queryFn: async () => {
               const res = await axiosSecure.get(`/users/role/${user?.email}`)
               return res.data
          },
          enabled: !!user?.email
     })

     return { role, isLoading }
};

export default useUserRole;