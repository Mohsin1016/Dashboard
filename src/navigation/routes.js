import DashboardLayout from './layout/DashboardLayout';
import AdminLogin from './pages/AdminLogin/AdminLogin';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/views/home/Home';
import Customers from './pages/views/Customers';
import Deals from './pages/views/deals/Deals';
import Finance from './pages/views/finance/Finance';
import Reports from './pages/views/finance/Reports'
import Category from './pages/views/Category';
import SubCategory from './pages/views/SubCategory';
import Products from './pages/views/products/Products';
import NewOrder from './pages/views/NewOrder';
import CompletedOrders from './pages/views/CompletedOrders';
import CancelledOrders from './pages/views/CancelledOrders';
import Vouchers from './pages/views/vouchers/Vouchers';
import SiteInfo from './pages/views/SiteInfo';
import Countries from './pages/views/Countries';
import PaymentMethods from './pages/views/PaymentMethods';
import Product from './pages/views/products/Product';
import OfferProductsListing from './pages/views/deals/OfferProductsListing';
import AddOfferProduct from './pages/views/deals/AddOfferProduct';
import AddVoucher from './pages/views/vouchers/AddVoucher';
import AddOffer from './pages/views/deals/AddOffer';
import SiteImages from './pages/views/SiteImages';
import Profile from './pages/views/Profile';

const routes = [
    {
      path: "/",
      name: "dashboard",
      component: AdminLogin,
    },
    { path: "/dashboard", name: "dashboard", component: DashboardLayout },
    {
      path: "/neworders",
      name: "neworders",
      component: NewOrder,
    },
    {
        exact: true,
        path: "/orders/*",
        name: "orders",
    
        children: [
          {
            exact: true,
            path: "/completedorders", name: "completedorders", component: CompletedOrders
          },
    
          {
            exact: true,
            path: "/cancelledorders", name: "cancelledorders", component: CancelledOrders 
          },
        ],
      },
  
    { path: "/customers", name: "customers", component: Customers },
    {
        exact: true,
        path: "/menu/*",
        name: "menu",
    
        children: [
          {
            exact: true,
            path: "category",
            name: "category",
            component: Category,
          },
    
          {
            exact: true,
            path: "sub-category",
            name: "sub-category",
            component: SubCategory,
          },
          {
            exact: true,
            path: "products",
            name: "products",
            component: Products,
          },
        ],
      },
    {
      path: "/deals",
      name: "deals",
      component: Deals,
    },
    {
      path: "/vouchers",
      name: "vouchers",
      component: Vouchers,
    },
          //
    {
      exact: true,
      path: "/finance/*",
      name: "finance",
  
      children: [
        {
          exact: true,
          path: "progress",
          name: "progress",
          component: Finance,
        },
        {
          exact: true,
          path: "reports",
          name: "reports",
          component: Reports,
        },
      ],
    },
    // here
  
    {
      path: "*",
      name: "redirect",
    },
  ];
  export default routes;