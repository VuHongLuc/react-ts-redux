import React from "react";
import TableHeader from "./TableHeader/TableHeader";
import TableBody from "./TableBody/TableBody";
import "./Table.css";

export default function Table() {
    return (
        <table className="student-table">
            <TableHeader />
            <TableBody />
        </table>
    );
}
