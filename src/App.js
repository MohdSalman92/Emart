import React from 'react';
import Nav from './Components/Navbar/Nav';
import {Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { About } from './Components/About/About';
import Products from './Components/Product/Products';
import Footer from './Components/Footer/Footer';
import Product from './Components/Product/Product';
import Contact from './Components/Contact/Contact';
import Cart from './Components/Product/Cart';

function App() {
  return (
    <>
      <Nav />
    <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route exact path="/about" Component={About}></Route>
        <Route exact path="/products" Component={Products}></Route>
        <Route exact path="/products/:id" Component={Product}></Route>
        <Route exact path="/item/:id" Component={Cart}></Route>
        <Route exact path="/contact" Component={Contact}></Route>
    </Routes>
    <Footer/>
    </>
  );
}
export default App;
