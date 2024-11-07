import TableRow from "../TableRow/TableRow";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store/store";
import { memo, useEffect, useMemo } from "react";
import { student } from "../../../Redux/Types/Types";
interface TableProps {
    setStudents: (x :student[]) => void;
    searchTerm: string;
    pageNumber: number
}

function TableBody({ setStudents, searchTerm, pageNumber }:TableProps) {
    const listStudent = useSelector(
        (state: RootState) => state.studentList
    )

    console.log("table body render");

    const filteredStudents = useMemo(()=>listStudent.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),[searchTerm, listStudent]);

    useEffect(() => {
        setStudents(filteredStudents);
    }, [filteredStudents]);

    const itemsPerPage = 10;
    const paginationStudent = filteredStudents.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage);

    return (
        <tbody>
            {paginationStudent.map((student, index) => (
                <TableRow key={student.id}
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

export default memo(TableBody)
