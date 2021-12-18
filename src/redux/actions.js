import axios from 'axios';

export const GET_USER = 'GET_USER';
export const SET_VALUE = 'SET_VALUE';

export const getUser = () => {
  return (dispatch) => {
    axios
      .get(`https://randomuser.me/api/`)
      .then((response) => {
        const data = response.data.results[0];
        dispatch({ type: GET_USER, payload: data });
      })
      .catch((error) => console.log(error));
  };
};

export const setValue = (value) => {
  return (dispatch) => {
    dispatch({ type: SET_VALUE, payload: value });
  };
};
