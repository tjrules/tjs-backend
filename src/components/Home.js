import React from 'react';
import Header from './Header';
import PostList from './PostList';
// import HomeCard from './HomeCard';

class Home extends React.Component {
  constructor() {
    super();
  //   this.state = {
  //     noSearch: true
    }
  //   this.search = this.search.bind(this);
  // }

  // search() {
  //   this.setState({
  //     noSearch: false
  //   })
  // }

  render() {
    return(
      <div>
        <Header />
        
        <div>
        <PostList/>
        </div>

      </div>
    )
  }
}

export default Home;
