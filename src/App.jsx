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

function App() {


  return (


    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='home' element={<HomePage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='cart' element={<CartPage />} />
        <Route path='learning' element={<MylearningPage />} >
          <Route path='joined' element={<JoinedTab />} />
          <Route path='wishlist' element={<WishListTab />} />
          <Route path='list' element={<MyList />} />
        </Route>
      </Routes>
    </BrowserRouter>


  )
}

export default App
