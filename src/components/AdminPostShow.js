import React from 'react';
import {Link} from 'react-router-dom';

const AdminPostShow = (props) => {

    return (
      <div className="user-fav">
        <form action="">
          <h2>Title: {props.posts.title}</h2>
          <p>Overview: {props.posts.content}</p>
        <button><Link to={`/edit/${props.posts.id}`} posts={props.posts}>Edit</Link> </button>
        </form>
      </div>
    )
  }


export default AdminPostShow
