import { FaInstagram, FaFacebookF, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-secondary text-gray-300 py-12 px-8 md:px-16 border-t border-neutral-700/90">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Logo & Info */}
          <div className="flex flex-col gap-4">
            <div className="w-16 h-16 bg-white flex items-center justify-center mb-2">
               <img src="/src/assets/b4-style-logo.png" alt="" />
            </div>
            <p className="text-sm/relaxed text-neutral-400 max-w-xs">
              Born for Style. Premium streetwear for the bold and fashion-forward young generation of Bangladesh. Elevate your wardrobe with our curated collection.
            </p>
            {/* <p className="text-sm">
              <span className="text-red-500 font-semibold">Owner:</span> Mustafa Tazwer Shakil
            </p> */}
            <div className="flex gap-5 mt-4">
              <a href="#" className="p-2.5 rounded-full hover:bg-primary bg-neutral-800 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="p-2.5 rounded-full hover:bg-primary bg-neutral-800 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white md:text-xl bebas mb-6 tracking-wider">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Shop All</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          {/* Column 3: Categories */}
          <div>
            <h3 className="text-white md:text-xl bebas mb-6 tracking-wider">Categories</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">T-Shirts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hoodies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pants</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sweatshirts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Winter Wear</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Drop Shoulder</a></li>
            </ul>
          </div>
          {/* Column 4: Contact Us */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white md:text-xl bebas mb-6 tracking-wider">Contact Us</h3>
            <div className="flex items-start gap-3 text-sm">
              <FaMapMarkerAlt className="text-red-600 mt-1" size={16} />
              <p>Patiya, Chittagong <br /> Bangladesh</p>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <FaPhoneAlt className="text-red-600" size={16} />
              <p>+880 1310-079634</p>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <IoMailOutline className="text-red-600" size={18} />
              <p>b4style@gmail.com</p>
            </div>

            {/* Delivery Box */}
            <div className="mt-6 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
              <p className="text-red-600 font-bold text-xs mb-1 uppercase tracking-tight">
                <span className="bg-red-600 text-white px-1 mr-1">BD</span> Bangladesh Only
              </p>
              <p className="text-xs text-gray-400">
                We deliver across all 64 districts of Bangladesh.
              </p>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-14 pt-6 border-t border-zinc-700 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 font-normal">
          <p className="">© 2026 B4 Style. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Shipping Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;