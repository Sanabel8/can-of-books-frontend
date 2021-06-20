import React from 'react';
import Header from './Header';
import Profile from './components/Profile';
import Login from './Login';

import IsLoadingAndError from './IsLoadingAndError';

import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import myFavoriteBooks from './myFavoriteBooks';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';

class App extends React.Component {

  render() {
    const { isAuthenticated } = this.props.auth0;
    console.log('app', this.props)
    console.log(isAuthenticated)
    return(
      <>
      
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
              <Switch>
                <Route exact path="/">
                  {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
                 {isAuthenticated ?<myFavoriteBooks />:<LoginButton/>}
        
                </Route>
                {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
                <Route exact path="/profile">
                  <Profile />
                </Route>
                
              </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
