import { createStore } from "redux";
import { rootReducer } from "../reducers";

// Create the Redux store with the middleware and root reducer
export const store = createStore(rootReducer);