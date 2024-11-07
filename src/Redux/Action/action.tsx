import { CLOSE_MODAL, OPEN_MODAL, student } from "../Types/Types";

// Action creators
export const openModal = (isEditMode: boolean) => {
    return {
        type: OPEN_MODAL,
        payload: { isEditMode },
    };
};

export const closeModal = () => {
    return { type: CLOSE_MODAL };
};

export const managerListStudent = (type: string, student: student) => {
    return {
        type: type,
        payload: student,
    };
};


export const paginationListStudent = (type: string, currentPage: number) => {
    return {
        type: type,
        payload: currentPage,
    };
};

export const sortStudent = (type: string) => {
    return {
        type: type
    };
};


export const searchStudent = (type: string, keyword: string, list: student[]) => {
    return {
        type: type,
        payload: keyword,
        list: list
    };
};

export const setCurrentStudent = (student: student) => ({
    type: "SET_CURRENT_STUDENT",
    payload: student,
});

export const updateStudentField = (field: string, value: string | number) => ({
    type: "UPDATE_CURRENT_STUDENT_FIELD",
    payload: { field, value },
});

export const saveUpdatedStudent = () => ({
    type: "SAVE_UPDATED_STUDENT",
});
