import React from 'react';
import { Link } from 'react-router-dom';

const UCard = (props) => {
    return (
        <div className="card">
            <h2><Link to={`/users/${props.user.id}/details`}>{props.user.name}</Link></h2>
        </div>
    )
}

export default UCard;