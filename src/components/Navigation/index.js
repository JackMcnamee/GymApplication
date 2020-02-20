import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/FlatButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MuiThemeProvider } from 'material-ui/styles';
import Tabs from 'react-bootstrap';

import '../../index.css';
import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
          authUser ? <NavigationAuth /> : <NavigationNonAuth />}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => ( 
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div>
      <Link to={ROUTES.HOME}>
        <RaisedButton label="Home" style={{ backgroundcolor: '#009688', color: '#hhh' }} />
      </Link> 
      <Link to={ROUTES.ACCOUNT}>
        <RaisedButton label="Account" style={{ backgroundcolor: '#ffff' }} />
      </Link> 
      <Link to={ROUTES.CLASSES}>
        <RaisedButton label="Classes" style={{ backgroundcolor: '#ffff' }} />
      </Link>
      <Link to={ROUTES.STORE}>
        <RaisedButton label="Store" style={{ backgroundcolor: '#ffff' }} />
      </Link>
      <SignOutButton />
    </div>
  </MuiThemeProvider>
);
  

const NavigationNonAuth = () => 
  <MuiThemeProvider>
    
      <Link to={ROUTES.HOME}>
        <RaisedButton label="Home" id="tab" />
      </Link> 
      <Link to={ROUTES.SIGN_IN}>
        <RaisedButton label="Sign In"  />
      </Link> 
      <Link to={ROUTES.SIGN_UP}>
        <RaisedButton label="Sign Up" id="tab" />
      </Link> 
  </MuiThemeProvider>

export default Navigation;