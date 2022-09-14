import { createStore } from "redux";
import counterReducers from "./counter/reducers";

const store = createStore(counterReducers);

export default store;
