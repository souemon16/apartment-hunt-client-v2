const {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
} = require("./actions");

const initialstate = {
  loading: false,
  data: [],
  err: "",
};

const datareducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        err: "",
      };

    case FETCH_DATA_FAILURE:
      return {
        loading: false,
        data: [],
        err: action.payload,
      };
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default datareducer;
