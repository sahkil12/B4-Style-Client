
const Hero = () => {
     return (
          <div className="relative h-screen w-full">
              <div className="flex items-center pt-20 px-6">
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/src/assets/b4-style-hero-1.jpg" alt="" />
               <div className="absolute inset-0 bg-black/60"></div>
               <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
                    {/* Hero text here */}
               </div>
              </div>
          </div>
     );
};

export default Hero;