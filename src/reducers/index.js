import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import { getEvents } from './events'
import { getBands } from './bands'

export default combineReducers({
    routing: routerReducer,
    events:  getEvents,
    bands: getBands
})