// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './customer/components/Cart/Cart.jsx';
import Checkout from './customer/components/Checkout/Checkout.jsx';
import Footer from './customer/components/Footer/Footer';
// import Navigation from './customer/components/Navigation/Navigation';
import Navigation from './customer/components/Navigation/Navigation.jsx';
import Order from './customer/components/Order/Order.jsx';
import OrderDetails from './customer/components/Order/OrderDetails.jsx';
import Product from './customer/components/Product/Product.jsx';
import ProductDetails from './customer/components/ProductDetails/ProductDetails.jsx';
import HomePage from './customer/pages/HomePage/HomePage';
import CustomerRouters from './Routers/CustomerRouters.jsx';

function App() {
  return (
    <div className="">

      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>


      
    
    </div>
  );
}

export default App;
