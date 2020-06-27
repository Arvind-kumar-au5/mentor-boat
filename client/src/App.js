import React ,{Fragment,useEffect} from 'react';
import './App.css';
import { BrowserRouter  as Router, Route, Switch } from 'react-router-dom';
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
import {loadMentor} from "./actions/MentorAuth"


import store from './store';
import MentorLanding from './components/Mentor/MentorLanding';
import MentorForm from './components/Mentor/MentorForm';
import Footer from "./components/Layout/Footer"
import MentorListMentors from "./components/ListMentors/ListMentors"
import MentorDashboard from "./components/MentorDashboard/MentorDashboard"
import MentorLogin from "./components/Mentor/MentorLogin"
import SingleProfile from "./components/ListMentors/SingleProfile"
import NotFound from "./components/Layout/404"
function App() {

  useEffect(() => {
    store.dispatch(loadUser())
    store.dispatch(loadMentor())
  }, [])

  return (
    <Provider store={store}>
      <Router >
        <Fragment>
         <Navbar/>
        
         <section className="container">
        
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component= {Register} />
            <Route exact path="/login" component= {Login}/>
            <Route exact path ='/mentor' component = {MentorLanding} /> 
            <PrivateRoute exact path = "/dashboard" component = {Dashboard} />
            <PrivateRoute exact path = "/mentee/profile" component = {Profile} />
            <Route exact path = '/mentor/apply' component = {MentorForm}/>
            <Route exact path = '/mentor/find' component = {MentorListMentors}/>
            <Route exact path = "/mentor/login" component = {MentorLogin} />
            <PrivateRoute exact path = "/mentor/dashboard" component = {MentorDashboard} />
            {/* */}
            <Route exact path="/mentor/profile/:id" component={SingleProfile} />
            <Route component={NotFound} />
          </Switch>
        </section>
        <Alerts/>
        <Footer/>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
