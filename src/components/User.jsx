import React from 'react';

const User = () => {
    return (
        <div className="card">
            <h2>{this.state.person.name}</h2>
            <h4>
                <span>age: {this.state.person.age}</span>
                <span>gender: {this.state.person.gender}</span>
            </h4>
            <p><a href={this.state.person.url} target="_new">view raw data.</a></p>
        </div>
    )
}

export default User;