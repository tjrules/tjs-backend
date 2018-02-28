import React, {Component} from 'react';
import axios from 'axios';
import {Redirect, Link} from 'react-router-dom';

import Header from './Header';


class PostAdd extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      content: '',
      newId: '',
      fireRedirect: false,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleInputChange(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]:value})
  }

  handleFormSubmit(e){
    e.preventDefault();
    event.target.content = '';
    axios.post('/posts', {
      title: this.state.title,
      content: this.state.content,
    })
    .then(res=> {
      console.log('this is res in handlform submit', res)
      this.setState({
        newId: res.data.post.id,
        fireRedirect: true,
      })
      console.log('we did it!', res)
      console.log('new state', this.state.newId)
    })
    .catch(err=> console.log('error at handle form submit', err))
    e.target.reset()
  }
  render(){
    console.log('this is state', this.state);
    return(
      <div className="add text-center">
        <Header />
        <div className="container ">
          <h2>Create New Post</h2>
          <form className="form-horizontal" onSubmit={this.handleFormSubmit}  action="/blog" method="POST">
            <div className="form-group">

              <div className="col-sm-10">
                <input
                  type="text"
                  placeholder="Title"
                  className="form-control"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div class="col-sm-10">
                <textarea
                  type="text"
                  name="content"
                  className="form-control"
                  placeholder="content"
                  value={this.state.content}
                  onChange={this.handleInputChange}>
                </textarea>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-default">Submit</button>
                  <button className="btn btn-primary btn-default"><Link className='remove-styling' to="/">Cancel</Link></button>
              </div>
            </div>
          </form>
        </div>
        {this.state.fireRedirect
          ? <Redirect to={`/admin`} />
        : ''}
      </div>
    )
  }
};

export default PostAdd;
