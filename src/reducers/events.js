import { GET_EVENTS } from '../actions'

const initialState = {
    events: []
}

export function getEvents(state = initialState, action) {
    switch (action.type) {
        case GET_EVENTS:
            return Object.assign({}, state, {events: action.payload})
        
        default:
            return (state)
    }

}