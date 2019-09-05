import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Favorite from '../components/pages/Favorite';
import Posts from '../components/pages/Posts';

function Router() {

    return (
        <Switch>
            <Route path="/" exact component = {Posts}/>
            <Route path="/favourite" component = {Favorite}/>
        </Switch>
    )
}

export default Router;