import { lazy } from "react";
export const Layout = lazy(()=> import('../layout/layout'))
export const Login = lazy(()=> import('../pages/login/login'))
export const Home = lazy(()=> import('../pages/home/home'))
export const Catalog = lazy(()=> import('../pages/catalog/catalog'))
export const Man = lazy(()=> import('../pages/man/man'))
export const Childs = lazy(()=> import('../pages/childs/childs'))
export const ForHome = lazy(()=> import('../pages/forhome/forhome'))
export const ForBeautyAndHealth = lazy(()=> import('../pages/forbeautyandhealth/forbeautyandhealth'))
export const Discount = lazy(()=> import('../pages/discount/discount'))
export const Licvidation = lazy(()=> import('../pages/licvidation/licvidation')) 
export const About = lazy(()=> import('../pages/about/about'))
export const Delivery = lazy(()=> import('../pages/delivery/delivery'))
export const Blog = lazy(()=> import('../pages/blog/blog'))
export const Optovic = lazy(()=> import('../pages/optovic/optovic'))
export const Return_items = lazy(()=> import('../pages/returnitems/returnitems'))
export const Policity = lazy(()=> import('../pages/policity/policity'))
export const Reviews = lazy(()=> import('../pages/reviews/reviews'))
export const Register = lazy(()=> import('../pages/register/register'))
export const Cart = lazy(()=> import('../pages/cart/cart'))