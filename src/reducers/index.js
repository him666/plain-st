import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import { getEvents } from './events'
import { getBands } from './bands'
import { getSong } from './songs'
export default combineReducers({
    routing: routerReducer,
    events:  getEvents,
    bands: getBands,
    song: getSong
})