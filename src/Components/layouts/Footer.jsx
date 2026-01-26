import { FaInstagram, FaFacebookF, FaPhoneAlt, FaMapMarkerAlt, FaTiktok } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logo from '../../../public/assets/Others/b4-style-logo.png'

const Footer = () => {
     const linkStyle = 'hover:text-primary active:text-primary transition-all duration-300 hover:ml-1 active:ml-1'
     
     const links = [
          { name: 'Shop All', to: '/shop' },
          { name: 'New Arrivals', to: '/shop' },
          { name: 'Best Sellers', to: '/shop' },
          { name: 'Sale', to: '/shop' },
          { name: 'About Us', to: '/about' },
          { name: 'Contact', to: '/contact' },
     ]
     const links2 = [
          { name: 'T-Shirts', to: '/shop' },
          { name: 'Hoodies', to: '/shop' },
          { name: 'Pants', to: '/shop' },
          { name: 'Sweatshirts', to: '/shop' },
          { name: 'Winter Wear', to: '/shop' },
          { name: 'Drop Shoulder', to: '/shop' },
     ]
     const socials = [
          { icon: <FaFacebookF size={20} />, link: "https://www.facebook.com/" },
          { icon: <FaInstagram size={20} />, link: "https://www.instagram.com/" },
          { icon: <FaTiktok size={20} />, link: "https://www.tiktok.com/" },
     ];

     return (
          <footer className="bg-secondary text-neutral-400 py-14 px-4 md:px-8 border-t border-neutral-700/90">
               <div className="md:max-w-[75%] mx-auto">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                         {/* Column 1: Logo & Info */}
                         <div className="flex flex-col gap-5">
                              <NavLink to={'/'} className="w-16 h-16 bg-accent flex items-center justify-center mb-2">
                                   <img src={logo} alt="B4 Style Logo" />
                              </NavLink>
                              <p className="text-sm/relaxed max-w-xs">
                                   Born for Style. Premium streetwear for the bold and fashion-forward young generation of Bangladesh. Elevate your wardrobe with our curated collection.
                              </p>
                              <p className="text-sm">
                                   <span className="text-primary font-semibold">Owner:</span> Mustafa Tazwer Shakil
                              </p>
                              <div className="flex gap-4 mt-4 text-accent/90">
                                   {socials?.map((social, ind) => (
                                        <a key={ind} href={social.link} target="_blank" className="p-2.5 rounded-full hover:bg-primary active:bg-primary bg-neutral-800 transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-105 active:-translate-y-1">
                                             {social.icon}
                                        </a>
                                   ))}
                              </div>
                         </div>
                         {/* Column 2: Quick Links */}
                         <div>
                              <h3 className="text-accent md:text-xl bebas mb-5 tracking-wider">Quick Links</h3>
                              <ul className="flex flex-col gap-4 text-sm ">
                                   {
                                        links?.map((link, ind) => (
                                             <li key={ind}>
                                                  <NavLink to={link.to} className={linkStyle}>{link.name}</NavLink>
                                             </li>
                                        ))
                                   }
                              </ul>
                         </div>
                         {/* Column 3: Categories */}
                         <div>
                              <h3 className="text-accent md:text-xl bebas mb-5 tracking-wider">Categories</h3>
                              <ul className="flex flex-col gap-4 text-sm">
                                   {
                                        links2?.map((link, ind) => (
                                             <li key={ind}>
                                                  <NavLink to={link.to} className={linkStyle}>{link.name}</NavLink>
                                             </li>
                                        ))
                                   }
                              </ul>
                         </div>
                         {/* Column 4: Contact Us */}
                         <div className="flex flex-col gap-4">
                              <h3 className="text-accent md:text-xl bebas mb-5 tracking-wider">Contact Us</h3>
                              <div className="flex items-start gap-3 text-sm">
                                   <FaMapMarkerAlt className="text-primary mt-1" size={18} />
                                   <p>Patiya, Chittagong <br /> Bangladesh</p>
                              </div>
                              <div className="flex items-center gap-3 text-sm">
                                   <FaPhoneAlt className="text-primary" size={18} />
                                   <p>+880 1310-079634</p>
                              </div>
                              <div className="flex items-center gap-3 text-sm">
                                   <IoMailOutline className="text-primary" size={18} />
                                   <p>b4style@gmail.com</p>
                              </div>
                              {/* Delivery Box */}
                              <div className="mt-4 p-4 bg-base-200 rounded-lg ">
                                   <p className="text-primary font-medium text-xs mb-3 uppercase tracking-tight">
                                        <span className="bg-primary text-accent px-1 mr-1">BD</span> Bangladesh Only
                                   </p>
                                   <p className="font-normal">
                                        We deliver across all 64 districts of Bangladesh.
                                   </p>
                              </div>
                         </div>
                    </div>
                    {/* Footer Bottom */}
                    <div className="mt-14 pt-8 border-t border-zinc-700 flex flex-col text-sm md:flex-row justify-between items-center gap-4 font-normal">
                         <p className="">© 2026 B4 Style. All rights reserved.</p>
                         <div className="flex gap-6">
                              <a href="#" className="hover:text-primary active:text-primary duration-200 transition-colors">Privacy Policy</a>
                              <a href="#" className="hover:text-primary active:text-primary duration-200 transition-colors">Terms of Service</a>
                              <a href="#" className="hover:text-primary active:text-primary duration-200 transition-colors">Shipping Info</a>
                         </div>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;