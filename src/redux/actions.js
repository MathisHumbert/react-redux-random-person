import axios from "axios";

export const GET_USER = 'GET_USER',

const url = 'https://randomuser.me/api/';

export const getUser = () => {
 return (dispatch) => {
  axios.get(url).then(response => {
   console.log(response)
  }).catch(error => console.log(error))
 }
}