import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
        id: 'u1',
        name: 'Harry',
        image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        places: 3
    }
];
    return <UsersList items={USERS} />;
};

export default Users;