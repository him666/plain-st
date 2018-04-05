import { GET_EVENTS } from "../actions";

const initialState = [];

export function getEvents(state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      console.log(action.payload);
      return [...state, ...action.payload];

    default:
      return state;
  }
}
