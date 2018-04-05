import { GET_SONG } from "../actions";

const initialState = [];

export function getSong(state = initialState, action) {
  switch (action.type) {
    case GET_SONG:
      console.log(action.payload);
      return [...state, action.payload];

    default:
      return state;
  }
}
