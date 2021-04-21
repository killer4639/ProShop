import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import ShippingScreen from "./screens/ShippingScreen.js";
import PaymentScreen from "./screens/PaymentScreen.js";
import PlaceOrderScreen from "./screens/PlaceOrderScreen.js";
import OrderScreen from "./screens/OrderScreen.js";
import UserListScreen from "./screens/UserListScreen.js";
import UserEditScreen from "./screens/UserEditScreen.js";
import ProductListScreen from "./screens/ProductListScreen.js";
import ProductEditScreen from "./screens/ProductEditScreen.js";
import OrderListScreen from "./screens/OrderListScreen.js";
const App = () => {
  return (
    <Router>
      <Header></Header>
      <main>
        <Container>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/payment" component={PaymentScreen}></Route>
          <Route path="/shipping" component={ShippingScreen}></Route>
          <Route path="/login" component={LoginScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/profile" component={ProfileScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/admin/userlist" component={UserListScreen}></Route>
          <Route path="/admin/user/:id/edit" component={UserEditScreen}></Route>
          <Route path="/admin/orderlist" component={OrderListScreen}></Route>
          <Route
            path="/admin/product/:id/edit"
            component={ProductEditScreen}
          ></Route>
          <Route
            path="/admin/productlist"
            component={ProductListScreen}
            exact
          ></Route>
          <Route
            path="/admin/productlist/:pageNumber"
            component={ProductListScreen}
            exact
          ></Route>
          <Route path="/search/:keyword" component={HomeScreen} exact></Route>
          <Route path="/page/:pageNumber" component={HomeScreen} exact></Route>
          <Route
            path="/search/:keyword/page/:pageNumber"
            component={HomeScreen}
            exact
          ></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
};

export default App;
