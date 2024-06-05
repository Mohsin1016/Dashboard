import './App.css';
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


function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<AdminLogin />} />
        <Route path='/' element={<DashboardLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/neworders' element={<NewOrder />} />
          <Route path='/completedorders' element={<CompletedOrders />} />
          <Route path='/cancelledorders' element={<CancelledOrders />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/progress' element={<Finance />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/category' element={<Category />} />
          <Route path='/sub-category' element={<SubCategory />} />
          <Route path='/products' element={<Products />} />
          <Route path='/vouchers' element={<Vouchers />} />
          <Route path='/deals' element={<Deals />} />
          <Route path='/site-info' element={<SiteInfo />} />
          <Route path='/site-images' element={<SiteImages />} />
          <Route path='/countries' element={<Countries />} />
          <Route path='/payment-methods' element={<PaymentMethods />} />
          <Route path='/products/add-product' element={<Product />} />
          <Route path='/offers/offer-product-listing' element={<OfferProductsListing />} />
          <Route path='/offers/add-offer-product' element={<AddOfferProduct />} />
          <Route path='/offers/add-offer' element={<AddOffer />} />
          <Route path='/vouchers/add-voucher' element={<AddVoucher />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
