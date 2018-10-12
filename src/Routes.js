import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginContainer from "./components/Login/LoginContainer";
import AdminContainer from "./components/Admin/AdminMenu/AdminContainer";
import DistribuidorContainer from './components/Distribuidor/DistribuidorContainer';
import FirstLogin from "./components/Login/FirstLogin";
import WrappedForm from "./components/Login/ChangePassword";

export const Routes = () => (
  <Switch>
    <Route exact path='/' component={LoginContainer} />
    <Route path='/admin' component={AdminContainer} />
    <Route path='/dist' component={DistribuidorContainer}/>
    <Route path='/active' component={FirstLogin} />
    <Route path='/change_password' component={WrappedForm} />
  </Switch>
);