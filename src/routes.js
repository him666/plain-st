import React from 'react';
import {Route} from 'react-router-dom'

import AppContainer from './App'
import News from './containers/news'
import About from './containers/about'
import Bands from './containers/bands'
import Redeemer from './containers/redeemer'
import Involved from './containers/involved'

const Routes = () => (
    <div>
        <main>
            <Route exact path="/" component={AppContainer}/>
            <Route path="/news" component={News}/>
            <Route path="/us" component={About}/>
            <Route path="/bands" component={Bands}/>
            <Route path="/redeemer" component={Redeemer}/>
            <Route path="/involved" component={Involved}/>
        </main>
    </div>
)
export default Routes