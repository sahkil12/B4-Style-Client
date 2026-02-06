import React from 'react';
import { motion } from 'framer-motion';
import { IoClose } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import ProductCard from '../../utils/ProductCard';

const Wishlist = () => {
     const wishlistItems = [
          {
               "_id": "69830317f759a1e294a114f0",
               "title": "Essential Oversized Tee",
               "slug": "essential-oversized-tee",
               "category": "T-SHIRTS",
               "price": 850,
               "discount": 29,
               "description": "Comfortable oversized tee with a classic design. Perfect for casual wear.",
               "images": ["https://i.ibb.co.com/Jjv1fGk6/OVERSIZED-TEE-webp.jpg"],
               "sizes": ["M", "L", "XL"],
               "isNew": true,
               "isBestSeller": true,
               "stock": 50,
               "createdAt": "2026-01-24T10:00:00Z"
          },
          {
               "_id": "69830317f759a1e294a114f1",
               "title": "Stealth Hoodie",
               "slug": "stealth-hoodie",
               "category": "HOODIES",
               "price": 2200,
               "discount": 21,
               "description": "Sleek hoodie with stealthy design and cozy fabric to keep you warm.",
               "images": ["https://i.ibb.co.com/fG4rTLsr/stealth-hoodie-webp.jpg"],
               "sizes": ["S", "M", "L"],
               "isNew": true,
               "isBestSeller": true,
               "stock": 38,
               "createdAt": "2026-01-24T13:00:00Z"
          },
     ];

     return (
          <div className="min-h-screen bg-base-100 text-accent p-4 mt-20 sm:p-6">
               <div className="xl:max-w-[75%] mx-auto py-5">
                    {/* Header Section */}
                    <div className="flex justify-between items-end mb-10 border-b border-accent/10 pb-6">
                         <h1 className="bebas text-4xl md:text-5xl tracking-wider">
                              MY WISHLIST
                         </h1>
                         <p className="text-gray-400 font-medium pb-1">
                              {wishlistItems.length} ITEMS
                         </p>
                    </div>

                    {/* Wishlist Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                         {wishlistItems.map((item, index) => (
                              <ProductCard key={index} product={item}></ProductCard>
                         ))}
                    </div>
                    {/* Empty State (Optional) */}
                    {wishlistItems.length === 0 && (
                         <div className="text-center py-20">
                              <h2 className="bebas text-3xl text-gray-500">Your wishlist is empty</h2>
                              <button className="btn btn-primary mt-6 rounded-none bebas px-10">
                                   GO SHOPPING
                              </button>
                         </div>
                    )}
               </div>
          </div>
     );
};

export default Wishlist;