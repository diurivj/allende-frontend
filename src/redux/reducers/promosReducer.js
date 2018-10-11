import * as types from '../actions/actionTypes';

export default function promosReducer(state = [], action){
  switch (action.type) {
    case types.GET_PROMOS:
      return action.promos;
    default:
      return state;
  }
}