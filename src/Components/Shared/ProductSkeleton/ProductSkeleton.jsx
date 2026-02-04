
const ProductSkeleton = () => {
     return (
          <div className="animate-pulse bg-accent/5 rounded-md shadow ">
               <div className="h-72 bg-accent/15 rounded mb-2"></div>
               <div className="p-3">
                    <div className="h-4 bg-accent/15 rounded w-3/8 "></div>
                    <div className="h-5  bg-accent/15 w-5/6 rounded my-3"></div>
                    <div className="h-4 bg-accent/15 rounded w-3/5  "></div>
               </div>
          </div>
     );
};

export default ProductSkeleton;