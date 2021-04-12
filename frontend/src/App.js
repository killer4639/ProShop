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
const App = () => {
  return (
    <Router>
      <Header></Header>
      <main>
        <Container>
          <Route path="/login" component={LoginScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
};

export default App;
