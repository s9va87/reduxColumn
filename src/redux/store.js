import {createStore} from "redux";
import cards from "./reduce";
// import {composeWithDevTools} from "redux-devtools-extension";


const store = createStore(
    cards

);

export default store;