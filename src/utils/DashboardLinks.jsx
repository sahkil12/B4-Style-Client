import {
  FiGrid,
  FiBox,
  FiShoppingBag,
  FiUsers,
  FiBarChart2,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";

// Admin Navigation
export const adminLinks = [
  {
    name: "Overview",
    path: "/dashboard",
    icon: FiGrid,
  },
  {
    name: "Products",
    path: "/dashboard/all-products",
    icon: FiBox,
  },
  {
    name: "Orders",
    path: "/dashboard/orders",
    icon: FiShoppingBag,
  },
  {
    name: "Users",
    path: "/dashboard/users",
    icon: FiUsers,
  },
  {
    name: "Analytics",
    path: "/dashboard/analytics",
    icon: FiBarChart2,
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    icon: FiSettings,
  },
];
// Profile.jsx

// User Navigation
export const userLinks = [
  {
    name: "Overview",
    path: "/dashboard",
    icon: FiGrid,
  },
  {
    name: "My Orders",
    path: "/dashboard/my-orders",
    icon: MdOutlineShoppingCart,
  },
  {
    name: "Profile",
    path: "/dashboard/user-profile",
    icon: FiUser,
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    icon: FiSettings,
  },
];