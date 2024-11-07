import { memo } from "react";
import "./TableHeader.css"

function TableHeader() {
    console.log("table header render");
    return (
        <thead>
            <tr>
                <th className="col-stt">Index</th>
                <th className="col-name">Name</th>
                <th className="col-age">Age</th>
                <th className="col-class">Class</th>
                <th className="col-phone">Phone</th>
                <th className="col-mng">Management</th>
            </tr>
        </thead>
    );
}
export default memo(TableHeader)
