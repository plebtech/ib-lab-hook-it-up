import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div id="controls">
                <Link></Link>
            </div>
            <div id="output">
                <Switch>
                    <Route>

                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;