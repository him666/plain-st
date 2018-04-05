import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import { getEvents } from './events'


export default combineReducers({
    routing: routerReducer,
    events:  getEvents
})