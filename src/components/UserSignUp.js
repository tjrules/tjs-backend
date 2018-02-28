import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Header from './Header';


class UserSignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      username: '',
      password: '',
      loggedInName: '',
      fireRedirect: false,
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
    axios({
      method: 'POST',
      url: '/auth/register',
      data: {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,

      }
    })
    .then( person => {
      console.log('got this back', person.data);
      this.setState({
        fireRedirect: true
      })
    })
    .catch( err => {
      console.log(err)
    })
  }

  render() {
    console.log(this.state)
    return (



      <div className="container">
        <Header/>
          <h1 className="jumbotron text-center ">Welcome to TJ's Cool Blog <br/> Please Register</h1>
          <div className="row">
            <div className="col-lg-12">
              <form id="login-form" onSubmit={this.handleSubmit} action="/auth/register" method="POST" role="form" >
                <div className="form-group">
                  <input type="text" onChange={this.handleChange} name="username" id="username" tabindex="1" class="form-control" placeholder="Username" />
                </div>
                <div className="form-group">
                  <input type="text" onChange={this.handleChange} name="email" id="email" tabindex="1" class="form-control" placeholder="email" />
                </div>
                <div className="form-group">
                  <input type="password" onChange={this.handleChange} name="password" id="password" tabindex="2" class="form-control" placeholder="Password"/>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                      <input type="submit" name="login" id="login" tabindex="4" class="form-control btn btn-login" value="Register"/>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="text-center">
                        <a href="/auth/login">Login</a>
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


export default UserSignUp;
