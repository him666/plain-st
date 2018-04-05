import { GET_EVENTS } from "../actions";

const initialState = [];

export function getEvents(state = initialState, action) {
<<<<<<< HEAD
  switch (action.type) {
    case GET_EVENTS:
      console.log(action.payload);
      return [...state, ...action.payload];

    default:
      return state;
  }
=======
    switch (action.type) {
        case GET_EVENTS:
            console.log(action.payload)
            return Object.assign({}, state, { ...action.payload })
        
        default:
            return (state)
    }

>>>>>>> 6c4f213df7c5b5a7ff37d0f0b951cb31897a747f
}
