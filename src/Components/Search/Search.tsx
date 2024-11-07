import React, { ChangeEvent } from "react";
import "./Search.css";
import { useDispatch, useSelector } from "react-redux";
import { SearchStudent } from "../../Redux/Action/action";
import { RootState } from "../../Redux/store/store";

export default function Search() {
  const dispatch = useDispatch();
  const listStudent = useSelector(
    (state: RootState) => state.studentList
)
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
      const keyword = e.target.value;
      dispatch(SearchStudent("SEARCH",keyword))
    };

    return (
        <input
            type="text"
            className="search"
            placeholder="Search..."
            onChange={handleSearch}
        />
    );
}
