import React from "react";
import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <div className="table_pagination">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <Link className="page-link" to="#">
            <i className="fas fa-angle-left"></i> Previous
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="#">
            1
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="#">
            2
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="#">
            Next <i className="fas fa-angle-right"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
