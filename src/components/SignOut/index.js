import React from 'react';
import { withFirebase } from '../Firebase';
import '../../index.css';
import { FlatButton } from 'material-ui';

const SignOutButton = ({ firebase }) => (
  <FlatButton label="Sign Out" onClick={firebase.doSignOut} 
      style={{ float: 'right' }} />
);

export default withFirebase(SignOutButton);