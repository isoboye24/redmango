import React from 'react';
import { Header, Footer } from '../components/layout';
import {
  About,
  Contact,
  Home,
  MenuItemDetail,
  NotFound,
  Product,
} from '../pages';
import { Route, Routes } from 'react-router-dom';
import { Profile } from '../pages/profile';

function App() {
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
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
