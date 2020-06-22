import React ,{Fragment,useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from "./components/Layout/Landing"
import Navbar from "./components/Layout/Navbar"
import Register from './components/Auth/Register';
import Login from "./components/Auth/Login"
import Alerts from "./components/Layout/Alert"
import PrivateRoute from "./components/Routes/PrivateRoute"
import Dashboard from "./components/Dashboard/Dashboard"
import Profile from "./components/Profile/Profile"
// redux 
import { Provider } from 'react-redux';

import {loadUser} from "./actions/auth"
import store from './store';
function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
         <Navbar/>
       
         <Alerts/>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component= {Register} />
            <Route exact path="/login" component= {Login}/>
            <PrivateRoute exact path = "/dashboard" component = {Dashboard} />
            <PrivateRoute  path = "/mentee/profile" component = {Profile} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
