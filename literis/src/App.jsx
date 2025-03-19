// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import SellerLogin from './Pages/Seller/login/sellerLogin.jsx';
import SellerRegister from './Pages/Seller/register/sellerRegister.jsx';
import ProductDetails from './Pages/ProductDetails/ProductDetail.jsx';
import Cart from './pages/Cart/Cart.jsx';
import Contact from './pages/Contact';
import About from './pages/About/About.jsx';
import Header from './components/Header/Header';
import Footer from './Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Bookstore from './Pages/Bookstore/Bookstore.jsx';

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/seller-login" element={<SellerLogin />} />
        <Route path="/seller-register" element={<SellerRegister />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/bookstore" element={<Bookstore />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route
          path="/product/:id"
          element={isAuthenticated ? <ProductDetails /> : <Navigate to="/" />}
        /> */}
        {/* <Route
          path="/cart"
          element={isAuthenticated ? <Cart /> : <Navigate to="/login" />}
        /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;