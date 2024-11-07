import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import studentListReducer from "./studentListReducer";
import currentStudentReducer from "./currentStudentReducer";

const rootReducer = combineReducers({
    modal: modalReducer,
    studentList: studentListReducer,
    currentStudent: currentStudentReducer
});

export default rootReducer