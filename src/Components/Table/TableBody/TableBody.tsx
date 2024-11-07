import TableRow from "../TableRow/TableRow";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store/store";

export default function TableBody() {
    const listStudent = useSelector(
        (state: RootState) => state.studentList
    )

    return (
        <tbody>
            {listStudent.map((student, index) => (
                <TableRow key={index}
                    id={student.id}
                    orderNumber={index}
                    name={student.name}
                    age={student.age}
                    studentClass={student.class}
                    phone={student.phone}
                />
            ))}
        </tbody>
    );
}
