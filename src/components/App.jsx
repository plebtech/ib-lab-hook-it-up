import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import Users from './Users.jsx';
import User from './User.jsx';

const App = () => {
    return (
        <Router>
            <div id="controls">
                {/* / loads by default. */}
                <Link to="/">home.</Link>
                <Link to="/users">users.</Link>
            </div>
            <div id="output">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/users" component={Users} />
                    <Route path="/users/:id" component={User} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;