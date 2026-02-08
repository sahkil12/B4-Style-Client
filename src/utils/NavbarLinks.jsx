import { FiHeart } from "react-icons/fi";

export const navLinks = [
     { name: "HOME", to: '/' },
     { name: "SHOP", to: '/shop' },
     { name: "ABOUT", to: '/about' },
     { name: "CONTACT", to: '/contact' },
     { name: "WISHLIST", icon: <FiHeart />, to: '/wishlist', wishlist: true },
];

export const menuVariants = {
     closed: {
          height: 0,
          opacity: 0,
          transition: {
               duration: 0.6,
               ease: "easeInOut",
          },
     },
     open: {
          height: "auto",
          opacity: 1,
          transition: {
               duration: 0.3,
               ease: "easeOut",
               when: "beforeChildren",
               staggerChildren: 0.12,
          },
     },
};

export const itemVariants = {
     closed: {
          opacity: 0,
          x: -20,
     },
     open: {
          opacity: 1,
          x: 0,
          transition: {
               duration: 0.12,
               ease: "easeOut",
          },
     },
};