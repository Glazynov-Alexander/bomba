import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import tasksReducer from "../store/reducers/index";
import thunk from "redux-thunk";

let reducers = combineReducers({
    tasks: tasksReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
window.store = store;
export default store;
