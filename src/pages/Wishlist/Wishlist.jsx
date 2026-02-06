import { motion } from 'framer-motion';
import ProductCard from '../../utils/ProductCard';
import useWishlist from '../../Hooks/useWishlist';
import { cardVariants } from '../../utils/CardAnimation';
import ProductSkeleton from '../../Components/Shared/ProductSkeleton/ProductSkeleton';

const Wishlist = () => {

     const { wishlist, isWishlistLoading } = useWishlist()
     console.log(isWishlistLoading);
     console.log(wishlist);

     return (
          <div className="min-h-screen bg-base-100 text-accent p-4 mt-20 sm:p-6">
               <div className="xl:max-w-[75%] mx-auto py-5">
                    {/* Header Section */}
                    <div className="flex justify-between items-end mb-10 border-b border-accent/10 pb-6">
                         <h1 className="bebas text-4xl md:text-5xl tracking-wider">
                              MY WISHLIST
                         </h1>
                         <p className="text-neutral-400 font-medium pb-1">
                              {wishlist?.length} Items Saved
                         </p>
                    </div>

                    {/* Wishlist Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                         {isWishlistLoading &&
                              Array.from({ length: 8 }).map((_, ind) => (
                                   <ProductSkeleton key={ind}></ProductSkeleton>
                              ))
                         }
                         {!isWishlistLoading &&
                              wishlist?.map((item, index) => (
                                   <ProductCard
                                        key={index}
                                        product={item?.product}
                                        animation={cardVariants}
                                   >
                                   </ProductCard>
                              ))}
                         {!isWishlistLoading && wishlist.length === 0 && (
                              <div className="text-center py-20 col-span-full">
                                   <h2 className="bebas text-3xl text-gray-500">Your wishlist is empty</h2>
                                   <button className="btn btn-primary mt-6 rounded-none bebas px-10">
                                        GO SHOPPING
                                   </button>
                              </div>
                         )}
                    </div>
                    {/* Empty State (Optional) */}

               </div>
          </div>
     );
};

export default Wishlist;