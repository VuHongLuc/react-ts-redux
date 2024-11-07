import "./App.css";
import Header from "./Components/Header/Header";
import Modal from "./Components/Modal/Modal";
import Table from "./Components/Table/Table";
import Pagination from "./Components/Pagination/Pagination";
import { useSelector } from "react-redux";
import { RootState } from "./Redux/store/store";
import Toolbar from "./Components/Toolbar/Toolbar";

function App() {
    const { isOpen } = useSelector((state: RootState) => state.modal);

    return (
        <div className="App">
            <Header content="STUDENT MANAGEMENT" />
            <Toolbar />
            <Table />
            <Pagination />
            {isOpen && <Modal />}
        </div>
    );
}

export default App;
