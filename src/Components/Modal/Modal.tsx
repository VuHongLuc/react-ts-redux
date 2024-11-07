import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import "./Modal.css";
import { RootState } from "../../Redux/store/store";
import { managerListStudent, closeModal, setCurrentStudent, updateStudentField } from "../../Redux/Action/action";
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, useState } from "react";

export default function Modal() {
    const dispatch = useDispatch();

    const { isEditMode } = useSelector(
        (state: RootState) => state.modal
    );

    const { currentStudent } = useSelector(
        (state: RootState) => state.currentStudent
    );

    const handleChangeNewSt = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch(updateStudentField(name, value))
    };

    const handleAdd = () => {
        if(currentStudent.name != "" && currentStudent.age != "" && currentStudent.class != "" && currentStudent.phone != "")
        dispatch(
            managerListStudent("ADD", {
                id: uuidv4(),
                name: currentStudent.name,
                age: currentStudent.age,
                class: currentStudent.class,
                phone: currentStudent.phone,
            })
        );
        dispatch(closeModal());
    };

    const handleEdit = () => {
        dispatch(
            managerListStudent("EDIT", {
                id: currentStudent.id,
                name: currentStudent.name,
                age: currentStudent.age,
                class: currentStudent.class,
                phone: currentStudent.phone,
            })
        );
        dispatch(closeModal());
    };

    return (
        <div className="form-modal">
            <div className="form">
                <h4>{isEditMode ? "UPDATE STUDENT" : "ADD STUDENT"}</h4>
                <label>
                    Full Name:
                    <input
                        type="text"
                        name="name"
                        value={currentStudent.name}
                        onChange={handleChangeNewSt}
                        required
                    />
                </label>
                <label>
                    Age:
                    <input
                        type="number"
                        name="age"
                        value={currentStudent.age}
                        onChange={handleChangeNewSt}
                        required
                    />
                </label>
                <label>
                    Class:
                    <input
                        type="text"
                        name="class"
                        value={currentStudent.class}
                        onChange={handleChangeNewSt}
                        required
                    />
                </label>
                <label>
                    Phone:
                    <input
                        type="text"
                        name="phone"
                        value={currentStudent.phone}
                        onChange={handleChangeNewSt}
                        required
                    />
                </label>
                <div className="btn-group">
                    <Button
                        content={isEditMode ? "Save" : "Add"}
                        bgrColor="#1f1ff8"
                        height="30px"
                        width="80px"
                        onClick={isEditMode ? handleEdit : handleAdd}
                    />
                    <Button
                        content="Cancel"
                        bgrColor="#e05454"
                        height="30px"
                        width="80px"
                        onClick={() => dispatch(closeModal())}
                    />
                </div>
            </div>
        </div>
    );
}
