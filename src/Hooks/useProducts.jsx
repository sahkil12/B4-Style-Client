import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from './products';

const useProducts = (params) => {
     return useQuery({
          queryKey: ["products", params],
          queryFn: () => fetchProducts(params)
     })
};

export default useProducts;