import "bootstrap/dist/css/bootstrap.min.css";
import "./Pagination.css";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store/store";
import { paginationListStudent } from "../../Redux/Action/action";

export default function Pagination() {
    const listStudent = useSelector((state: RootState) => state.studentList);

    const itemsPerPage = 10;
    const totalPages = useMemo(() => Math.ceil(listStudent.length / itemsPerPage),[])

    const [currentPage, setCurrentPage] = useState(1);

    const dispatch = useDispatch();

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
        dispatch(paginationListStudent("PAGINATION",page))
    };

    return (
      <ul className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <li
            key={i + 1}
            className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
            onClick={() => handlePageClick(i + 1)}
          >
            <a className="page-link" href="#">{i + 1}</a>
          </li>
        ))}
      </ul>
    );
}
