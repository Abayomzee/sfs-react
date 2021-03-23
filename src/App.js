import React from "react";
import { Route, Switch } from "react-router-dom";

import InvestmentDetails from "./components/pages/investmentDetails";
import AccoutSuccess from "./components/pages/accountSuccess";
import NewInvestments from "./components/pages/newInvestment";
import MyInvestments from "./components/pages/myInvestments";
import Dashboard from "./components/pages/dashboard";
import MyAccount from "./components/pages/myAccount";
import Portfolio from "./components/pages/portfolio";
import PinSetup from "./components/pages/pinSetup";
import AddBank from "./components/pages/addBank";
import Success from "./components/pages/success";
import Signup from "./components/pages/signup";
import Login from "./components/pages/login";
import Index from "./components/pages/index";
import Otp from "./components/pages/otp";

import "./App.css";

const App = () => {
  return (
    <Switch>
      <Route path="/investmentDetails/:id" component={InvestmentDetails} />
      <Route path="/newInvestments" component={NewInvestments} />
      <Route path="/myInvestments" component={MyInvestments} />
      <Route path="/acctSuccess" component={AccoutSuccess} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/myAccount" component={MyAccount} />
      <Route path="/pinSetup" component={PinSetup} />
      <Route path="/success" component={Success} />
      <Route path="/addBank" component={AddBank} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/otp" component={Otp} />

      <Route path="/" exact component={Index} />
    </Switch>
  );
};

export default App;
