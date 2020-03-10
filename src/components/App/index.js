import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Navigation from '../Navigation';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import ClassesPage from '../Classes';
import PersonalTrainerPage from '../PersonalTrainer';
import StorePage from '../Store';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

// Session handling done here

const App = () => (
  <MuiThemeProvider>
    <Router>
      <div>
        {/* determines which pages user is authorised to see */}
        <Navigation />
        <hr />
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route exact path={ROUTES.CLASSES} component={ClassesPage} />
        <Route exact path={ROUTES.PERSONAL_TRAINER} component={PersonalTrainerPage} />
        <Route exact path={ROUTES.STORE} component={StorePage} />
      </div>
    </Router>
  </MuiThemeProvider>

);

export default withAuthentication(App);