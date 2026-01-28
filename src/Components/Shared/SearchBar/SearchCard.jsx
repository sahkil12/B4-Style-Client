import { useNavigate } from "react-router-dom";

const SearchCard = ({ product, onClose }) => {

     const navigate = useNavigate()

     return (
          <div
               onClick={() => {
                    navigate(`/product/${product?.id}`)
                   onClose(true)
               }}
               className="bg-secondary rounded-lg overflow-hidden border-2 border-transparent hover:border-primary/90 active:border-primary/90 cursor-pointer transition-all duration-300">
               <img
                    src={product?.image}
                    alt={product?.title}
                    className="w-full h-[210px] lg:h-[230px] object-cover"
               />

               <div className="p-2 lg:p-4 space-y-1">
                    <p className="text-[11px] tracking-widest text-neutral-400">
                         {product.category}
                    </p>

                    <h4 className="text-sm lg:text-base font-medium bebas tracking-[1.6px] text-accent">
                         {product.title}
                    </h4>

                    <p className="text-primary font-bold text-sm">
                         ৳{product.price}
                    </p>
               </div>
          </div>
     );
};
export default SearchCard;