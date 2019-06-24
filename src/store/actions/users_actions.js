import axios from "axios";
import {
  FETCH_ALL_USERS_START,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_ERROR
} from "../actions/actions_types";

export const fetchAllUsers = () => dispatch => {
  dispatch({
    type: FETCH_ALL_USERS_START
  });

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      console.log(response);
      dispatch({
        type: FETCH_ALL_USERS_SUCCESS,
        payload: Array.from(response.data)
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_ALL_USERS_ERROR,
        payload: error.message
      });
    });
};
