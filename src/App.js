import React, { Component } from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import MidNavBar from "./components/midnavbar";
import MegaMenu from "./components/megamenu";
import Footer from "./components/Footer";
import Signup from  "./components/Signup";
import Login from "./components/Login";
import Mobile from "./components/Mobile";
import Dth from "./components/Dth";
import Datacard from "./components/Datacard";
import Electricity from "./components/Electricity";
import Landline from "./components/Landline";
import Refund from "./components/Pages/refund";
import Policy from "./components/Pages/privacy";
import Terms from "./components/Pages/termsCondition";
import Client from './components/Client/Client';


class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     route: 'signin',
  //     isSignedIn: false,
  //   }
  
  // }


  // onRouteChange = (route) => {
  //   if (route === 'signout') {
  //     this.setState({isSignedIn: false})
  //   } else if (route === 'home') {
  //     this.setState({isSignedIn: true})
  //   }
  //   this.setState({route: route});
  // }
  render() {
    // const { isSignedIn, route } = this.state;
    return (
      <div>
        <NavBar />
        <MidNavBar />
        {/* <MidNavBar isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'
        ?
        <div> */}
        <MegaMenu />
        <div className="content">
          <Switch>
          <Route path="/products/:id" component={ProductDetails} /> }/>
          <Route path="/products" render={(props) => <Products sortBy="newest" {...props} /> }/>
          <Route path="/posts/:year?/:month?" component={Posts}/>
          <Route path="/admin" component={Dashboard}/>
          <Route path="/notfound" component={NotFound}/>
          <Route path="/" exact component={Home}/>
          <Route path ="/Signup" exact component={Signup} />
          <Route path ="/Login" exact component = {Login} />
          <Route path = "/Mobile" exact component = {Mobile} />
          <Route path = "/Dth" exact component = {Dth} />
          <Route path = "/Datacard" exact component = {Datacard} />
          <Route path ="/Electricity" exact component = {Electricity} />
          <Route path="/Landline" exact component = {Landline} />
          <Route path="/refund" exact component = {Refund} />
          <Route path="/policy" exact component = {Policy} />
          <Route path="/terms_condition" exact component = {Terms} />
          <Route path = "/Client" exact component = {Client} />


          <Redirect to="/notfound" />
          </Switch>
        </div>
        {/* </div>
        : (
             route === 'signin'
             ? <Signin  onRouteChange={this.onRouteChange}/>
             : <Register onRouteChange={this.onRouteChange}/>
            )
        } */}
     
        <Footer />
      </div>
    );
  }
}

export default App;
