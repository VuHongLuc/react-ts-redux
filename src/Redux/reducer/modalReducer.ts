import { CLOSE_MODAL, OPEN_MODAL, student } from "../Types/Types";

// Định nghĩa các kiểu dữ liệu cần thiết
interface ModalState {
    isOpen: boolean;
    isEditMode: boolean;
}

const initialState: ModalState = {
    isOpen: false,
    isEditMode: false,
};

// Tạo reducer để quản lý state của modal
const modalReducer = (state = initialState, action: any): ModalState => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                isOpen: true,
                isEditMode: action.payload.isEditMode,
            };
        case CLOSE_MODAL:
            return { ...state, isOpen: false };
        default:
            return state;
    }
};

export default modalReducer;
