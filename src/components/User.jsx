import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {

    const [user, setUser] = useState([]);
    const [comp, setComp] = useState([]);
    const PARAMS = useParams();
    const URL = 'https://jsonplaceholder.typicode.com/users/' + PARAMS.id;

    const getUser = async () => {
        try {
            let res = await fetch(URL);
            let user = await res.json();
            let comp = await user.company;
            setUser(user);
            setComp(comp);
        }
        catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getUser();
    }, []);
    
    return (
        <div className="card">
            <h2>{user.name}</h2>
            <h3>username: {user.username}</h3>
            <h3>email: {user.email}</h3>
            <h4>company: {comp.name}</h4>
                <h4>website: <a href={`http://${user.website}`}>{user.website}</a></h4>
                <h4>phone: {user.phone}</h4>
            <p>wanna hear some bs? "{comp.bs}"</p>
            <p><a href={URL} target="_new">view raw data.</a></p>
        </div>
    )
}

export default User;