import { useDispatch } from "react-redux";
import Button from "../../Button/Button";
import { managerListStudent, openModal, setCurrentStudent } from "../../../Redux/Action/action";
import { memo } from "react";
type RowProps = {
    id: string;
    orderNumber: number;
    name: string;
    age: number;
    studentClass: string;
    phone: string;
};
function TableRow({
    id,
    orderNumber,
    name,
    age,
    studentClass,
    phone,
}: RowProps) {

    const dispatch = useDispatch();

    const currStudent = {
        id: id,
        name: name,
        age: age,
        class: studentClass,
        phone: phone,
    }

    const handleEdit = () => {
        dispatch(openModal(true));               // mở modal với chế độ thêm mới
        dispatch(setCurrentStudent(currStudent)) // cài đặt current student
    };

    const handleDelete = () => {
        dispatch(managerListStudent("DELETE",{
            id: id,
            name: name,
            age: age,
            class: studentClass,
            phone: phone,
        }));
    };
    console.log("row",name ,"render");

    return (
        <tr key={id}>
            <td>{orderNumber}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{studentClass}</td>
            <td>{phone}</td>
            <td className="btn-table">
                <Button
                    content="Edit"
                    bgrColor="#7400e1"
                    height="25px"
                    width="50px"
                    onClick={() => handleEdit()}
                />
                <Button
                    content="Delete"
                    bgrColor="#e10000"
                    height="25px"
                    width="50px"
                    onClick={() => handleDelete()}
                />
            </td>
        </tr>
    );
}

export default memo(TableRow)
