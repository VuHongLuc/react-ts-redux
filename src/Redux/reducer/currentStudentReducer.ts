import { student } from '../Types/Types';

interface ModalState {
    currentStudent: student;
}

const initialState: ModalState = {
    currentStudent: {
        id: "",
        name: "",
        age: 0,
        class: "",
        phone: "",
    },
};

const currentStudentReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "SET_CURRENT_STUDENT":
            return { ...state, currentStudent: action.payload };
        case "UPDATE_CURRENT_STUDENT_FIELD":
            if (state.currentStudent) {
                return {
                    ...state,
                    currentStudent: {
                        ...state.currentStudent,
                        [action.payload.field]: action.payload.value,
                    },
                };
            }
            return state;
        default:
            return state;
    }
};

export default currentStudentReducer;
