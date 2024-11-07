import data from "../../data"

const studentListReducer = (studentList = data, action: any)=>{
    switch(action.type){
        case "DELETE":
            return studentList.filter(student => student.id !== action.payload.id)
        case "ADD":
            return [action.payload, ...studentList]
        case "EDIT":
            return studentList.map(student =>
                student.id === action.payload.id ? { ...student, ...action.payload } : student
            );
        case "SORT ASC":
            return [...studentList].sort((a, b) => a.age - b.age);
        case "SORT DESC":
            return [...studentList].sort((a, b) => b.age - a.age);
        default:
            return studentList;
    }
}
export default studentListReducer;