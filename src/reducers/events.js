import { GET_EVENTS } from '../actions'

const initialState = {
    events: []
}

export function getEvents(state = initialState, action) {
    switch (action.type) {
        case GET_EVENTS:
            console.log(action.payload)
            return Object.assign({}, state, { ...action.payload })
        
        default:
            return (state)
    }

}
