
const Categories = () => {

     const categories = [
          {
               title: "T-Shirts",
               items: 23,
               image: "/src/assets/category/black-tshirt.webp",
          },
          {
               title: "Hoodies",
               items: 18,
               image: "/src/assets/category/Hoodies.webp",
          },
          // {
          //      title: "Drop Shoulder",
          //      items: 30,
          //      image: "/src/assets/categories/drop.jpg",
          // },
          // {
          //      title: "Sweatshirts",
          //      items: 14,
          //      image: "/src/assets/categories/sweatshirt.jpg",
          // },
          {
               title: "Pants",
               items: 21,
               image: "/src/assets/category/pants.webp",
          },
          {
               title: "Winter Wear",
               items: 12,
               image: "/src/assets/category/winter.webp",
          },
     ];

     return (
          <div className='py-10'>
               {/* title */}
               <section className='flex flex-col text-center gap-6'>
                    <h4 className='text-primary font-medium uppercase tracking-[6px]'>Browse By</h4>
                    <h2 className='text-4xl md:text-6xl bebas tracking-wider'>Shop Categories</h2>
               </section>
               {/* category card */}
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 px-6 mx-auto">
                    {categories.map((cat, index) => (
                         <div
                              key={index}
                              className="group relative h-[420px] rounded-xl overflow-hidden cursor-pointer"
                         >
                              {/* image */}
                              <img
                                   src={cat.image}
                                   alt={cat.title}
                                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              {/* overlay */}
                              <div className="absolute inset-0 transition-all duration-400
                              bg-black/30 group-active:bg-gradient-to-b from-secondary/30 to-primary/30
                              group-hover:bg-gradient-to-b from-secondary/30 to-primary/30"></div>

                              {/* text */}
                              <div className="absolute bottom-6 left-5 z-10">
                                   <h3 className="text-2xl bebas tracking-wider text-white">
                                        {cat.title}
                                   </h3>
                                   <p className="text-[15px] text-neutral-300 mt-1">
                                        {cat.items} Items
                                   </p>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default Categories;