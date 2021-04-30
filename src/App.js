import 'bootstrap/dist/css/bootstrap.css';
import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,

  Route, Switch
} from 'react-router-dom';
import Admin from './components/Admin/Admin';
import EditProduct from './components/Admin/EditProduct/EditProduct';
import ManageProduct from './components/Admin/ManageProduct/ManageProduct';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Product from './components/Product/Product';
import Signup from './components/Signup/Signup';

export const UserContext = createContext();
function App() {
  const [loggenInUser, setLoggedInUser] = useState({});
  
  return (
    <div className="app container">
      <UserContext.Provider value={[loggenInUser, setLoggedInUser]}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <PrivateRoute exact path="/checkout">
            <Checkout/>
          </PrivateRoute>
          <PrivateRoute exact path="/orders">
            <Orders/>
          </PrivateRoute>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/signup">
            <Signup/>
          </Route>
          <PrivateRoute exact path="/admin">
            <Admin/>
          </PrivateRoute>
          <PrivateRoute exact path="/product/add">
            <Admin/>
          </PrivateRoute>
          <PrivateRoute exact path="/product/manage">
            <ManageProduct/>
          </PrivateRoute>
          <PrivateRoute exact path="/product/edit/:id">
            <EditProduct/>
          </PrivateRoute>
          <PrivateRoute exact path="/product/view/:id">
            <Product/>
          </PrivateRoute>
      
        </Switch>
        <Footer/>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
