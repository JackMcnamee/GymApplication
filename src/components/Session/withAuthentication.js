import React from 'react';

import AuthUserContext from './context';
import { withFirebase } from '../Firebase';

// Used to keep track of the authenticated user

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
      };
    }

    componentDidMount() {
      // firebase listener to get the authenticated user
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        // called when a user is signed in or out
        authUser => {
          authUser
          ? this.setState({ authUser }) // signed in
          : this.setState({ authUser: null }); // signed out
          },
      );
    }

    // removes listener when component is being removed
    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        // uses the React context provider to provide the user
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      )
    }
  }

  return withFirebase(WithAuthentication);
};

export default withAuthentication;