import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import studentReducer from "./studentListReducer";
import currentStudentReducer from "./currentStudentReducer";

const rootReducer = combineReducers({
    modal: modalReducer,
    studentList: studentReducer,
    currentStudent: currentStudentReducer
});

export default rootReducer