import axios from "axios";

export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};
export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};
export const fetchDataFailure = (err) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: err,
  };
};
// export const fetchData = () => {
//   return (dispatch) => {
//     dispatch(FETCH_DATA_REQUEST);
//     axios
//       .get("http://jsonplaceholder.typicode.com/users")
//       .then((data) => {
//         dispatch(FETCH_DATA_SUCCESS(data));
//       })
//       .catch((err) => {
//         dispatch(FETCH_DATA_FAILURE(err));
//       });
//   };
// };
