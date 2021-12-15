import { combineReducers } from "redux";
import search from "./search";
import store from "./store";


const rootReducer = combineReducers({store, search});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;