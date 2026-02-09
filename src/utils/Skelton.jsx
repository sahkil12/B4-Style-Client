// search skelton
export const searchSkelton = <div className="animate-pulse bg-accent/5 rounded-md shadow ">
     <div className="h-60 bg-accent/15 rounded mb-2"></div>
     <div className="p-3">
          <div className="h-4 bg-accent/15 rounded w-3/8 "></div>
          <div className="h-5  bg-accent/15 w-5/6 rounded my-3"></div>
          <div className="h-4 bg-accent/15 rounded w-3/5  "></div>
     </div>
</div>

// add cart skelton
export const addCartSkelton =
     <div className="animate-pulse h-36 flex gap-5 p-4 bg-accent/5 rounded-md shadow ">
          <div className="w-28 rounded-sm bg-accent/15 "></div>
          <div className="w-full flex justify-between gap-3 py-2">
               <div className='w-full space-y-5'>
                    <div className="h-5 bg-accent/15 rounded w-3/8 "></div>
                    <div className="h-5 bg-accent/15 rounded w-3/12"></div>
               </div>
               <span className="h-7 rounded-full bg-accent/15 w-7"></span>
          </div>
     </div>

// cart skelton
export const cartSkeleton = <div className="flex gap-4 animate-pulse">
     <div className="w-20 h-24 bg-base-300 rounded" />
     <div className="flex-1 space-y-2">
          <div className="h-3 bg-base-300 rounded w-3/4" />
          <div className="h-3 bg-base-300 rounded w-1/3" />
          <div className="h-4 bg-base-300 rounded w-1/2 mt-3" />
     </div>
</div>     