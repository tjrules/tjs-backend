import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import UserAdmin from './components/UserAdmin';
import UserLogin from './components/UserLogin';
import UserSignUp from './components/UserSignUp';
import PostAdd from './components/PostAdd';
import PostList from './components/PostList';
import PostEdit from './components/PostEdit';
import AdminPostShow from './components/AdminPostShow';
import Home from './components/Home';
import PostShow from './components/PostShow';

class App extends Component {
  render(){
    return (

<Router>
      <div>
        <Switch>
          <Route path='/login' component={UserLogin} />
          <Route path='/register' component={UserSignUp} />
          <Route path='/admin' component={UserAdmin} />
          <Route path='/edit/:id' component={PostEdit}/>
          <Route path='/admin/post/:id' component={AdminPostShow} />
          <Route path='/add' component={PostAdd}/>
          <Route path='/post/:id' component={PostShow}/>
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
</Router>
      )
  }
}

export default App;
