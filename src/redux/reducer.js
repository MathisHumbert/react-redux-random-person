import { combineReducers } from 'redux';
import { GET_USER, SET_VALUE } from './actions';

const initialState = {
  user: {},
  hoverName: 'name',
};

const reducer = (state = initialState, { type, payload }) => {
  if (type === GET_USER) {
    return { ...state, user: payload };
  }
  if (type === SET_VALUE) {
    return { ...state, hoverName: payload };
  }
  return state;
};

const rootReducer = combineReducers({
  reducer,
});

export default rootReducer;
