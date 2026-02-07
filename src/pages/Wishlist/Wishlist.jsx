import { FaArrowRightLong } from "react-icons/fa6";
import ProductCard from '../../utils/ProductCard';
import useWishlist from '../../Hooks/useWishlist';
import { cardVariants } from '../../utils/CardAnimation';
import ProductSkeleton from '../../Components/Shared/ProductSkeleton/ProductSkeleton';
import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { MdDeleteForever } from "react-icons/md";

const Wishlist = () => {
     const { wishlist, isWishlistLoading, clearWishlist, wishlistLoad } = useWishlist()

     return (
          <div className="min-h-[calc(100vh-200px)] bg-base-100 text-accent p-4 mt-20 sm:p-6">
               <div className="xl:max-w-[75%] mx-auto py-6 md:py-10">
                    {/* Header Section */}
                    {
                         wishlist?.length > 0 && (
                              <div className="flex justify-between items-end mb-6 border-b border-accent/10 pb-6">
                                   <h1 className="bebas text-3xl md:text-5xl tracking-wider">
                                        MY WISHLIST
                                   </h1>
                                   <p className="text-neutral-400 font-medium pb-1">
                                        {wishlist?.length} Items Saved
                                   </p>
                              </div>
                         )
                    }
                    <div className="flex justify-end items-center mb-8">
                         {wishlist?.length > 0 && (
                              <button
                                   onClick={clearWishlist}
                                   className="flex items-center text-sm font-semibold text-neutral-300 gap-2 hover:bg-primary hover:text-accent py-2 px-2.5 rounded-xs active:text-primary/85 transition-all duration-200 cursor-pointer"
                                   disabled={isWishlistLoading}
                              >
                                   <MdDeleteForever size={20} /> CLEAR ALL
                              </button>
                         )}
                    </div>
                    {/* Wishlist Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                         {wishlistLoad &&
                              Array.from({ length: 6 }).map((_, ind) => (
                                   <ProductSkeleton key={ind}></ProductSkeleton>
                              ))
                         }
                         {!wishlistLoad &&
                              wishlist?.map((item, index) => (
                                   <ProductCard
                                        key={index}
                                        product={item?.product}
                                        animation={cardVariants}
                                        open={true}
                                   >
                                   </ProductCard>
                              ))}

                    </div>
                    {/* Empty State  */}
                    {!wishlistLoad && wishlist.length === 0 && (
                         <div className="flex flex-col space-y-3 w-fit mx-auto text-center pt-20 col-span-full">
                              <span className="p-6 text-accent/70 bg-accent/10 rounded-full mx-auto mb-7"> < FiHeart size={45} /> </span>
                              <h2 className="bebas tracking-wider text-2xl text-accent/90">Your wishlist is Empty</h2>
                              <p className='text-neutral-400'>Start adding items you love by clicking the heart icon</p>
                              <Link to={'/shop'} className="py-2.5 group flex items-center font-semibold gap-2 w-fit mx-auto bg-primary mt-4 rounded-none px-10">
                                   GO SHOPPING <FaArrowRightLong className="group-hover:ml-1 transition-all duration-200" size={16} />
                              </Link>
                         </div>
                    )}
               </div>
          </div>
     );
};

export default Wishlist;