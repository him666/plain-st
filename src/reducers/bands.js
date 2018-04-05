import { GET_BANDS } from "../actions";

const initialState = [];

export function getBands(state = initialState, action) {
  switch (action.type) {
    case GET_BANDS:
      console.log(action.payload);
      return [...state, ...action.payload];

    default:
      return state;
  }
}
