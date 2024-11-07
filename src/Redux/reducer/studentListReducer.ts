import data from "../../data"

const initStudentList = data;

const studentReducer = (studentList = initStudentList, action: any)=>{
    switch(action.type){
        case "DELETE":
            return studentList.filter(student => student.id !== action.payload.id)
        case "ADD":
            return [action.payload, ...studentList]
        case "EDIT":
            const index = studentList.findIndex(student => student.id === action.payload.id);
            if (index !== -1) {
                studentList[index] = { ...studentList[index], ...action.payload };
            }
            return studentList
        case "SEARCH":
            return initStudentList.filter(student => student.name.toLowerCase().includes(action.payload.toLowerCase()))
        case "PAGINATION":
            const itemsPerPage = 10;
            return initStudentList.slice((action.payload - 1) * itemsPerPage, action.payload * itemsPerPage);
        default:
            return studentList;
    }
}
export default studentReducer;