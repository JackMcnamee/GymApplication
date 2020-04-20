import React, { Component } from 'react';
import '../../index.css';

import { withFirebase } from '../Firebase';
import { compose } from 'recompose';
import { withAuthorization } from '../Session';
import * as ROLES from '../../constants/roles';

// Here is the admin page of our application
// It is only accessible by users registered as admins
// You can see the users of our app here

// To Do: view personal training sessions booked

class AdminPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            loading: false,
            users: [], // users structured as an array
        };
    }

    componentDidMount(){
        this.setState({ loading: true });

        this.props.firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();

            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }));

            this.setState({
                users: usersList,
                loading: false,
            });
        });
    }

    componentWillUnmount() {
        this.props.firebase.users().off();
    }

    render() {
        const { users, loading } = this.state;

        return (
            <div id="inner">
                <h1>Admin Page</h1>

                <h2>Users</h2>

                {loading && <div>Loading...</div>}

                <UserList users={users} />

                <h2>Personal Training Sessions booked</h2>
            </div>
        );
    }
}

const UserList = ({ users }) => (
    <ul>
        {users.map(user => (
            <li key={user.uid}>
                <span>
                    <strong>Username:</strong> {user.username}
                </span>
                <br />
                <span>
                    <strong>E-Mail:</strong> {user.email}
                </span>
                <br />
            </li>
        ))}
    </ul>
);

const condition = authUser =>
    authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(
    withAuthorization(condition), 
    withFirebase,
)(AdminPage);