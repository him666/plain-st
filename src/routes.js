import React from 'react';
import {Route} from 'react-router-dom'

import AppContainer from './App'

const Routes = () => (
    <div>
        <main>
            <Route exact path="/" component={AppContainer}/>
        </main>
    </div>
)
export default Routes