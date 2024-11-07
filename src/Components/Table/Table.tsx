import React, { memo } from "react";
import TableHeader from "./TableHeader/TableHeader";
import TableBody from "./TableBody/TableBody";
import "./Table.css";
import { student } from "../../Redux/Types/Types";
interface TableProps {
    setStudents: (x :student[]) => void;
    searchTerm: string;
    pageNumber: number;
}

function Table({ setStudents, searchTerm, pageNumber }:TableProps) {
    console.log("table render");

    return (
        <table className="student-table">
            <TableHeader />
            <TableBody setStudents={setStudents} searchTerm={searchTerm} pageNumber= {pageNumber}/>
        </table>
    );
}

export default memo(Table)
