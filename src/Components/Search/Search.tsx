import React, { ChangeEvent, memo } from "react";
import "./Search.css";
import { useDispatch, useSelector } from "react-redux";
import { searchStudent } from "../../Redux/Action/action";
import { RootState } from "../../Redux/store/store";
import { student } from "../../Redux/Types/Types";
interface ToolbarProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    setStudents: (term: student[]) => void;
    setPageNumber : (y : number) => void
}

function Search({ searchTerm, setSearchTerm, setStudents, setPageNumber}: ToolbarProps) {
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setPageNumber(1);
    };

    console.log("search render");
    return (
        <input
            type="text"
            className="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
        />
    );
}
export default memo(Search);
