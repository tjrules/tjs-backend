import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';
//
// const App = () => (
//   <MuiThemeProvider>
//     <MyAwesomeReactComponent />
//   </MuiThemeProvider>
// );
// ReactDOM.render(
//   <App/>, document.getElementById('root')
// )

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
