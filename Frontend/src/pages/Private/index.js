import React from 'react';
import { Route, Redirect, useHistory} from 'react-router-dom';

export default function Private(props){
    const history = useHistory();
    const converted = !!history.location.state;
    return converted ? <Route {...props}/> : <Redirect to="/" />
}