import React from 'react';
import '../../index.css';

import { PasswordForgetLink } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const Account = () => (
  <div id="outer">
    <div id="inner">
    <h1>Your Account</h1>
    <h3>Want to reset your password?</h3>
    <PasswordChangeForm />
    <PasswordForgetLink />
    </div>
  </div>
);

export default Account;