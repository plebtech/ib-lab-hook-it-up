import React, { useState, useEffect } from 'react';
import UCard from './UCard';

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                let res = await fetch('https://jsonplaceholder.typicode.com/users');
                let users = await res.json();
                setUsers(users);
            }
            catch (err) {
                console.log(err);
            }
        }
        getUsers();
    }, []);

    return (
        <>
            <h1>users.</h1>
            {users.map(user => {
                return (
                    <UCard
                        key={user.id}
                        user={user}
                    />
                )
            })}
        </>
    )
}

export default Users;