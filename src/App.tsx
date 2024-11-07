import "./App.css";
import Header from "./Components/Header/Header";
import Modal from "./Components/Modal/Modal";
import Table from "./Components/Table/Table";
import Pagination from "./Components/Pagination/Pagination";
import { useSelector } from "react-redux";
import { RootState } from "./Redux/store/store";
import Toolbar from "./Components/Toolbar/Toolbar";
import { useState } from "react";

function App() {
    const { isOpen } = useSelector((state: RootState) => state.modal);
    const listStudent = useSelector((state: RootState) => state.studentList);

    const [searchTerm, setSearchTerm] = useState("");
    const [students, setStudents] = useState(listStudent);
    const [pageNumber, setPageNumber] = useState(1);

    return (
        <div className="App">
            <Header content="STUDENT MANAGEMENT" />
            <Toolbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} setStudents={setStudents} setPageNumber={setPageNumber}/>
            <Table setStudents={setStudents} searchTerm={searchTerm} pageNumber={pageNumber} />
            <Pagination students = {students} pageNumber={pageNumber} setPageNumber={setPageNumber} />
            {isOpen && <Modal />}
        </div>
    );
}

export default App;
