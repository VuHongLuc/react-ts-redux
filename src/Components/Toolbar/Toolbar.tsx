import Button from "../Button/Button";
import Search from "../Search/Search";
import { useDispatch } from "react-redux";
import {
    openModal,
    setCurrentStudent,
    sortStudent,
} from "../../Redux/Action/action";
import { memo, useState } from "react";
import { student } from "../../Redux/Types/Types";

interface ToolbarProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    setStudents: (term: student[]) => void;
    setPageNumber : (y : number) => void
}

function Toolbar({ searchTerm, setSearchTerm, setStudents, setPageNumber }: ToolbarProps) {
    const dispatch = useDispatch();
    const [sortOrder, setSortOrder] = useState("asc");
    const handleAdd = () => {
        dispatch(
            openModal(false) // mở modal với chế độ thêm mới
        );
        dispatch(
            setCurrentStudent({
                id: "",
                name: "",
                age: 0,
                class: "",
                phone: "",
            })
        ); // cài đặt current student
    };

    const handleSort = () => {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        dispatch(sortStudent(sortOrder === "asc" ? "SORT ASC" : "SORT DESC"));
    };
    console.log("toolbar render");

    return (
        <div className="toolbar">
            <Button
                bgrColor="green"
                content="ADD"
                height="30px"
                width="60px"
                onClick={handleAdd}
            />
            <Button
                bgrColor="#000000"
                content={sortOrder === "asc" ? "Descending ▼" : "Ascending ▲"}
                height="25px"
                width="120px"
                onClick={handleSort}
            />
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} setStudents={setStudents} setPageNumber={setPageNumber}/>
        </div>
    );
}

export default memo(Toolbar);
