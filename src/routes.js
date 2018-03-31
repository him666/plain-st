import React from 'react';
import {Route} from 'react-router-dom';

import AppContainer from './App';
import News from './containers/news';
import About from './containers/about';
import Bands from './containers/bands';
import Redeemer from './containers/redeemer';
import Involved from './containers/involved';
import Login from './containers/login';
const Routes = () => (
    <div>
        <main>
            <Route exact path="/" component={AppContainer}/>
            <Route exact path="/news" component={News}/>
            <Route exact path="/us" component={About}/>
            <Route exact path="/bands" component={Bands}/>
            <Route exact path="/redeemer" component={Redeemer}/>
            <Route exact path="/involved" component={Involved}/>
            <Route exact path="/login" component={Login}/>
        </main>
    </div>
)
export default Routes;