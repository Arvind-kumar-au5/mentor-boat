import React ,{Fragment} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from "./components/Layout/Landing"
import Navbar from "./components/Layout/Navbar"
import Register from './components/Auth/Register';
import Login from "./components/Auth/Login"
// redux 
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
         <Navbar/>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component= {Register}/>
            <Route exact path="/login" component= {Login}/>
           
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
