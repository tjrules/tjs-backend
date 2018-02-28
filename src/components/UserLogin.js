import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Header from './Header';

class UserLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      username: '',
      password: '',
      loggedIn: false,
      fireRedirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post('/auth/login', {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
    })
    .then( data => {
      console.log('login submitted');
      this.setState({
        loggedIn:true,
        fireRedirect: true
      })
      })
    .catch(err => console.log(err))
    e.target.reset()
  }


  render() {
    console.log(this.state)
    return (

  <div className="container text-center">
    <Header />
    <h1 className="jumbotron ">Welcome to TJ's Cool Blog
      <br/>
      Please login
    </h1>
    <div className="row">
      <div className="col-md-12 text-center">
        <form id="login-form" onSubmit={this.handleSubmit} action="/auth/login" method="post" role="form" >
          <div className="form-group">
            <input type="text" onChange={this.handleChange} name="username" id="username" tabindex="1" class="form-control" placeholder="Username" />
          </div>
          <div className="form-group">
            <input type="password" onChange={this.handleChange} name="password" id="password" tabindex="2" class="form-control" placeholder="Password"/>
          </div>
          <div className="form-group text-center">
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <input type="submit" onChange={this.handleChange} name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-login" value="Log In"/>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center">
                  <a href="/auth/register">Register</a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    {this.state.fireRedirect ? <Redirect to='/admin' /> : ''}
</div>
    )
  }
}

export default UserLogin;
