import React from "react";
import { Link } from "react-router-dom";
import './midnavbar.css';

const MidNavBar = () => {
  return (

    <div>
    <div className="second-navbar">
    <div className="container">
    <div className="row">
    <div className = "col-lg-9 col-md-9 col-sm-12 col-xs-12">
    <h1>Godital seva</h1>
    </div>
    <div className="col-lg-3 col-md-3">
    <div className="custom-upper-social">
    <ul class = "list-inline">
        <li class="list-inline-item">
           <Link to="/Login"> <button className="btn btn-info" type="button">Login</button></Link>
        </li>
        <li class="list-inline-item">
           <Link to="/Signup"><button className="btn btn-primary">Signup</button></Link>
        </li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    </div>



   
    {/* <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/posts/2018/06">Posts</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul> */}
    </div>
  );
};

export default MidNavBar;
