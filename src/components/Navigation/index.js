import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/FlatButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MuiThemeProvider } from 'material-ui/styles';
import Tabs from 'react-bootstrap';
import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import '../../index.css';
import { auth } from 'firebase';

// Navigation of our gym application is set up here

const Navigation = () => (
    <AuthUserContext.Consumer>
      {/* If user authorized show NavigationAuth, else show NavigationNonAuth */}
      {authUser =>
        authUser ? (
          <NavigationAuth authUser={authUser} />
        ) : (
          <NavigationNonAuth />
        )
      }
    </AuthUserContext.Consumer>
);

// what user views if they are signed in
const NavigationAuth = ({ authUser }) => ( 
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div>
      <Link to={ROUTES.HOME}>
        <RaisedButton label="Home" style={{ backgroundcolor: '#009688', color: '#hhh' }} />
      </Link> 
      <Link to={ROUTES.ACCOUNT}>
        <RaisedButton label="Account" />
      </Link> 
      {!!authUser.roles[ROLES.ADMIN] && (
        <Link to={ROUTES.ADMIN}>
          <RaisedButton label="Admin" style={{ backgroundcolor: '#ffff' }} />
        </Link>
      )}
      <Link to={ROUTES.CLASSES}>
        <RaisedButton label="Classes" style={{ backgroundcolor: '#ffff' }} />
      </Link>
      <Link to={ROUTES.PERSONAL_TRAINER}>
        <RaisedButton label="Book a Personal Trainer" style={{ backgroundcolor: '#ffff' }} />
      </Link>
      <Link to={ROUTES.STORE}>
        <RaisedButton label="Store" style={{ backgroundcolor: '#ffff' }} />
      </Link>
      <SignOutButton />
    </div>
  </MuiThemeProvider>
);
  
// what user views if they are not signed in
const NavigationNonAuth = () => (
  <MuiThemeProvider>
    <div>
      <Link to={ROUTES.HOME}>
        <RaisedButton label="Home" id="tab" />
      </Link> 
      <Link to={ROUTES.SIGN_IN}>
        <RaisedButton label="Sign In"  />
      </Link> 
      <Link to={ROUTES.SIGN_UP}>
        <RaisedButton label="Sign Up" id="tab" />
      </Link> 
    </div>
  </MuiThemeProvider>
);

export default Navigation;