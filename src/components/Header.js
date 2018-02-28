import React from 'react';
import {Link,Redirect} from 'react-router-dom';

const Header = () => {

  return (
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link to="/" className="navbar-brand" href="/">TJ's Cool Blog</Link>
      </div>
      <div className="collapse navbar-collapse dropdown-toggle" id="myNavbar">
        <ul className="nav navbar-nav">
          <li className="active">
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/register'>Sign Up</Link>
          </li>
          <li>
            <Link to='/login'>Log In</Link>
          </li>
          <li>
            <Link to='/admin'>Admin</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="/auth/logout">
              <span className="glyphicon glyphicon-log-out"></span>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>)
}

export default Header;
