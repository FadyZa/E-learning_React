import "./App.css"
import NavBar from './components/navbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home/home.jsx';
import { CartPage } from './pages/cart/cart.jsx';
import MylearningPage from './pages/mylearning/mylearning.jsx';
import JoinedTab from "./pages/mylearning/tabs/joined.jsx";
import WishListTab from "./pages/mylearning/tabs/wishList.jsx";
import MyList from "./pages/mylearning/tabs/myList.jsx";
import RegisterUser from "./pages/register/RegisterUser.jsx";
import LoginAdmin from "./pages/LoginAdmin/LoginAdmin.jsx";
import Productlist from "./pages/Admin/Products/Productlist.jsx";
import CreateProduct from "./pages/Admin/Products/CreateProduct.jsx";
import EditProduct from "./pages/Admin/Products/EditProduct.jsx";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <BrowserRouter>
      <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path='home' element={<HomePage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='cart' element={<CartPage />} />
        <Route path='learning' element={<MylearningPage />} >
          <Route path='joined' element={<JoinedTab />} />
          <Route path='wishlist' element={<WishListTab />} />
          <Route path='list' element={<MyList />} />
        </Route>

        <Route path='/RegisterUser' element={<RegisterUser />} />
        <Route path='/LoginAdmin' element={<LoginAdmin setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/Admin/Products' element={<Productlist />} />
        <Route path='/Admin/Products/Create' element={<CreateProduct />} />
        <Route path='/Admin/Products/Edit/:id' element={<EditProduct />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App
