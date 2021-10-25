import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home';
import Records from './pages/Records';
import RecordsForm from './pages/Records/Form';
import RecordsDetail from './pages/Records/Detail';

const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cadastros" exact component={Records} />
            <Route path="/alunos_cadastro" exact component={RecordsForm} />
            <Route path="/alunos_cadastro/:id" exact component={RecordsForm} />
            <Route path="/cadastros/:id" exact component={RecordsDetail} />
        </Switch>
    );
}

export default Routes;