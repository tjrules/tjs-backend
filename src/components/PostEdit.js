import React, {Component} from 'react';
import axios from 'axios';
import {Redirect, Link} from 'react-router-dom';
import Header from './Header';

class PostEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      fireRedirect: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

componentDidMount() {
  axios.get(`/posts/${this.props.match.params.id}`)
  .then((res) => {
    const posts = res.data.posts;
    this.setState({
      title: posts.title,
      content: posts.content,
    })
    console.log('this is res componentDidMount', res)
  })
  .catch(err => console.log('there is an error in edit component did mount', err));
}

deletePost() {
  axios.delete(`/posts/${this.props.match.params.id}`)
  .then(res => {
    this.setState({
      fireRedirect: true
    })
  }).catch(err => {
    console.log('there was an error deleting this post', err)});
}

handleInputChange(e){
  const name = e.target.name;
  const value = e.target.value;
  this.setState({
    [name]:value
  });
}

  handleFormSubmit(e){
    e.preventDefault();
    axios.put(`/posts/${this.props.match.params.id}`, {
      title: this.state.title,
      content: this.state.content,
    })
    .then(res=> {
      console.log('we did it!', res)
      this.setState({
        fireRedirect: true,
      });
    })
    .catch(err=> console.log('Post Edit error at handle form submit', err))
    e.target.reset()
  }

  render() {
    return(



      <div className="add text-center">
        <Header />
        <div className="container ">
          <h2>Create New Post</h2>
          <form className="form-horizontal" onSubmit={this.handleFormSubmit}  action="/" method="POST">
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
                 <input type="submit" value="Submit" />
                 <input type="submit" className="delete" onClick={this.deletePost} value="Delete"/><Link to="/admin"/>
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

export default PostEdit;
