import axios from 'axios';

export const GET_USER = 'GET_USER';

export const getUser = () => {
  return (dispatch) => {
    axios
      .get(`https://randomuser.me/api/`)
      .then((response) => {
        console.log(response.data.info);
      })
      .catch((error) => console.log(error));
  };
};
