import { combineReducers } from "redux";
import store from "./store";


const rootReducer = combineReducers({store});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;