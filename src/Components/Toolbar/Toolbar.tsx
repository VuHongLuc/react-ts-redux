import Button from "../Button/Button";
import Search from "../Search/Search";
import { useDispatch } from "react-redux";
import { openModal, setCurrentStudent } from "../../Redux/Action/action";

export default function Toolbar() {
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(
            openModal(false) // mở modal với chế độ thêm mới
        );
        dispatch(setCurrentStudent({
            id: "",
            name: "",
            age: 0,
            class: "",
            phone: "",
        })) // cài đặt current student
    };
    return (
        <div className="toolbar">
            <Button
                bgrColor="green"
                content="ADD"
                height="30px"
                width="60px"
                onClick={handleAdd}
            />
            <Search />
        </div>
    );
}
