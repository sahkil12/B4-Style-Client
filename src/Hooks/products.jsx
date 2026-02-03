import axiosPublic from "./axiosPublic";

export const fetchProducts = async (query = {}) => {
     const res = await axiosPublic.get("/products", { params: query });
     return res.data;
};

export const fetchProductById = async (id) => {
     const res = await axiosPublic.get(`/products/${id}`);
     return res.data;
};