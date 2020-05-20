import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Convert from './pages/Convert';
import Info from './pages/Info';
import Private from './pages/Private';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Convert} />
                <Private exact path="/info" component={Info} />
                
            </Switch>
        </BrowserRouter>
    );
}