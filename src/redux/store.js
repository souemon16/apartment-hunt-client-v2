import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import datareducer from "./reducers";

const store = createStore(
  datareducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
