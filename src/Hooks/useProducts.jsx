import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from './products';

const useProducts = (params, enabled = true) => {
     return useQuery({
          queryKey: ["products", params],
          queryFn: () => fetchProducts(params),
          enabled,
          keepPreviousData: true,
     })
};

export default useProducts;