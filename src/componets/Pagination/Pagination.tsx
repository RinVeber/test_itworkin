import React from "react";
import "./Pagination.modules.css";

interface IPaginationProps {
  page: number,
  info: any,
  changePage: (typePage: "next" | "last") => void
}

export default function Pagination({ page, info, changePage }: IPaginationProps) {
  return (
    <div className="pagination">
      <div>total: {info.count}</div>
      <div className="pagination__buttons">
        <button type="button" onClick={() => changePage('last')}>
          &#8592;
        </button>

        <div>
          {page}/{info.pages}
        </div>

        <button type="button" onClick={() => changePage('next')}>
          &#8594;
        </button>
      </div>
    </div>
  );
}
