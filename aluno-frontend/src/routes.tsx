import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home';
import Records from './pages/Records';

const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cadastros" exact component={Records} />
        </Switch>
    );
}

export default Routes;