import React, {Component} from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';

class PostShow extends Component {
  constructor() {
    super();
    this.state = {
      posts: null,
      apiDataLoaded: false,
      fireRedirect: false
    }
  }

  componentDidMount() {
    axios.get(`/post-list/${this.props.match.params.id}`).then(res => {
      console.log('this is post show res', res);
      this.setState({
        apiDataLoaded: true,
        posts: res.data.posts,
        })
    }).catch(err => console.log('error at post show component did moutn', err))
  }

  renderPost() {
    console.log('this is what will render', this.state.posts)
    return(
        <div className='container text-center'>
<div className="media">
        <h1>{this.state.posts.title}</h1>
        <p>{this.state.posts.content}</p>
        <Link to="/">Back</Link>
        {
          this.state.fireRedirect
            ? <Redirect push to="/"/>
            : ''
        }
      </div>
      </div>
    )
  }
  render() {
console.log('this is state', this.state)
    return (
    <div className="post-show">

    {this.state.apiDataLoaded ? this.renderPost() : ''}
    </div>)
  }
}

export default PostShow;
