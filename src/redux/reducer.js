import { combineReducers } from 'redux';

const initialState = {
  test: 'test',
};

const reducer = (state = initialState, action) => {
  return state;
};

const rootReducer = combineReducers({
  reducer,
});

export default rootReducer;
