import React from 'react';
import { useEffect } from 'react';
import { Header, Footer } from '../components/layout';
import {
  About,
  Contact,
  Home,
  Login,
  MenuItemDetail,
  NotFound,
  Product,
  Register,
  ShoppingCart,
} from '../pages';
import { Route, Routes } from 'react-router-dom';
import { Profile } from '../pages/profile';
import { useDispatch } from 'react-redux';
import { useGetShoppingCartQuery } from '../APIs/shoppingCartApi';
import { setShoppingCart } from '../Storage/Redux/shoppingCartSlice';
import { userModel } from '../Interfaces';
import { jwtDecode } from 'jwt-decode';
import { setLoggedInUser } from '../Storage/Redux/userAuthSlice';

function App() {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetShoppingCartQuery(
    'c55c9162-4af5-4f15-8870-37fb5972f9e9'
  );

  useEffect(() => {
    if (!isLoading) {
      console.log(data.result.cartItems);
      dispatch(setShoppingCart(data.result?.cartItems));
    }
  }, [data]);

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    if (localToken) {
      const { fullName, id, email, role }: userModel = jwtDecode(localToken);
      dispatch(setLoggedInUser({ fullName, id, email, role }));
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="pb-5">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/products" element={<Product />}></Route>
          <Route
            path="/menuItemDetails/:menuItemId"
            element={<MenuItemDetail />}
          ></Route>
          <Route path="/contact-us" element={<Contact />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/shoppingcart" element={<ShoppingCart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
