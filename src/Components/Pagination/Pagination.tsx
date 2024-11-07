import "bootstrap/dist/css/bootstrap.min.css";
import "./Pagination.css";
import { memo, useMemo } from "react";
import { student } from "../../Redux/Types/Types";

interface PaginationProps {
    students: student[],
    pageNumber: number;
    setPageNumber: (x: number) => void;
}

function Pagination({ students, pageNumber, setPageNumber }: PaginationProps) {
    const itemsPerPage = 10;
    const totalPages = useMemo(
        () => Math.ceil(students.length / itemsPerPage),
        [students]
    );

    const handlePageClick = (page: number) => {
        setPageNumber(page);
    };

    return (
        <ul className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
                <li
                    key={i + 1}
                    className={`page-item ${
                        pageNumber === i + 1 ? "active" : ""
                    }`}
                    onClick={() => handlePageClick(i + 1)}
                >
                    <a className="page-link" href="#">
                        {i + 1}
                    </a>
                </li>
            ))}
        </ul>
    );
}
export default memo(Pagination);
