import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import { MdPayment, MdAddShoppingCart } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";
import { FaProductHunt } from "react-icons/fa";

export const allNav = [
  {
    id: 1,
    title: "Dashboard",
    icon: <AiOutlineDashboard />,
    role: "admin",
    path: "/admin/dashboard",
  },
  {
    id: 2,
    title: "Orders",
    icon: <AiOutlineShoppingCart />,
    role: "admin",
    path: "/admin/orders",
  },
  {
    id: 3,
    title: "Category",
    icon: <BiSolidCategory />,
    role: "admin",
    path: "/admin/category",
  },
  {
    id: 4,
    title: "Add Product",
    icon: <MdAddShoppingCart />,
    role: "admin",
    path: "/admin/add-product",
  },
  {
    id: 5,
    title: "Payment Request",
    icon: <MdPayment />,
    role: "admin",
    path: "/admin/payment-request",
  },
  {
    id: 6,
    title: "Live Chat",
    icon: <IoIosChatbubbles />,
    role: "admin",
    path: "/admin/chat",
  },
  {
    id: 7,
    title: "All Products",
    icon: <FaProductHunt />,
    role: "admin",
    path: "/admin/all-products",
  },
];
