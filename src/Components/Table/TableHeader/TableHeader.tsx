import "./TableHeader.css"

export default function TableHeader() {
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
