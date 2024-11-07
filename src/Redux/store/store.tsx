import { createStore, combineReducers } from "redux";
import rootReducer from "../reducer/combineReducer";

const store = createStore(rootReducer);

export default store;
export type RootState = ReturnType<typeof rootReducer>;
// export type RootState2 = ReturnType<typeof rootReducer>;
