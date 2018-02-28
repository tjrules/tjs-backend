import React, {Component} from 'react';
import axios from 'axios';
import PostShow from './PostShow';
import {Link} from 'react-router-dom';
// import Header from 'Header';

class PostList extends Component {

constructor(){
  super();
  this.state = {
    apiDataLoaded: false,
    apiData: null,
  }
  this.renderPostsList = this.renderPostsList.bind(this);
}

componentWillMount() {
  axios.get('/post-list')
  .then(res => {
    this.setState({
      apiDataLoaded:true,
      apiData: res.data.data
    })
    console.log('this is res',res)
  })
  .catch(err=> {
    console.log('something wrong with api call')
    console.log(err)
  })
}

renderPostsList() {
  if(this.state.apiDataLoaded) {
    return this.state.apiData.map(posts => {
      console.log('this is posts', posts)
      return(
        <div className="container text-center ">

        <div className="media-body media-center">
          <img src="http://res.cloudinary.com/dftzmialt/image/upload/v1519245643/tj_glasses_jwvk9f.jpg" width="100px"/>

          <h4 className="media-heading">{posts.title}</h4>
            <p>{posts.content}</p>
            <Link to={`/post/${posts.id}`}>Read more</Link>
        </div>
        </div>
      );
    });
  } else return <p>your list is empty</p>
}

  render(){
    return(
      <div className="container-fluid">

      <div className="text-center"><h1>Welcome!</h1></div>
        <div className="wrapper">  {this.renderPostsList()} </div>
      </div>
    )
  }
}

export default PostList;
