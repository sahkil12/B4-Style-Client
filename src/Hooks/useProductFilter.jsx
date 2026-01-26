import { useMemo } from "react";

const useProductFilter = (products, filters) => {
  const {
    category,
    size,
    search,
    sort
  } = filters;

  return useMemo(() => {
    return products
      .filter(p =>
        category === "All Products" ||
        p.category.toLowerCase() === category.toLowerCase()
      )
      .filter(p => !size || p.sizes?.includes(size))
      .filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => {
        if (sort === "Price: Low to High") return a.price - b.price;
        if (sort === "Price: High to Low") return b.price - a.price;
        return b.id - a.id;
      });
  }, [products, category, size, search, sort]);
};

export default useProductFilter;
