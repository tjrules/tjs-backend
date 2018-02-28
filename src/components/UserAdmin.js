import React, {Component} from 'react';
import axios from 'axios';
import AdminPostShow from './AdminPostShow';
import {Link} from 'react-router-dom';
import Header from './Header';

class UserAdmin extends Component {
  constructor() {
    super();
    this.state = {
      apiDataLoaded: false,
      apiData: null
    }
    this.renderPostShow = this.renderPostShow.bind(this);
  }


  componentDidMount() {
    axios.get('/posts').then(res => {
      this.setState({apiDataLoaded: true, apiData: res.data.posts})
    }).catch(err => {
      console.log('there is an error at componentdidmount', err)
    })
  }

  renderPostShow() {
    if (this.state.apiDataLoaded) {
      return this.state.apiData.map(posts => {
        return (
          <AdminPostShow key={posts.id} posts={posts}/>
        );
      });
    } else return <p>Your list is empty</p>
  }
j
  render() {
    return (

      <div>
      <Header/>

      <div className="">
        <div className="">
        <button> <Link to='/add'>Add</Link></button>
        </div>
        <div id="">My Post List</div>
        <div id="">{this.renderPostShow()}</div>
      </div>

    </div>)
  }

}

export default UserAdmin;
