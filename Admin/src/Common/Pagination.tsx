import React, { useEffect } from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NoSearchResult from './Tabledata/NoSearchResult';

interface PaginationProps {
  data?: any;
  perPageData?: any;
  currentPage?: any;
  setCurrentPage?: any;
  currentData?: any;
  className?: any;
}

const Pagination = ({ perPageData, data, currentPage, setCurrentPage, currentData, className }: PaginationProps) => {

  const pagination: boolean = true;

  const handleClick = (e: any) => {
    setCurrentPage(Number(e.target.id));
  };

  const pageNumbers: any = [];
  for (let i = 1; i <= Math.ceil(data?.length / perPageData); i++) {
    pageNumbers.push(i);
  }
  const handleprevPage = () => {
    let prevPage = currentPage - 1;
    setCurrentPage(prevPage);
  };
  const handlenextPage = (event: any) => {
    event.preventDefault();
    let nextPage = currentPage + 1;
    setCurrentPage(nextPage);
  };

  useEffect(() => {
    if (pageNumbers.length && pageNumbers.length < currentPage) {
      setCurrentPage(pageNumbers.length)
    }
  }, [pageNumbers.length, currentPage, setCurrentPage])

  return (
    <React.Fragment>
      {!currentData?.length && <NoSearchResult />}
      {pagination &&
        <Row className={className} id="pagination-element" style={{ display: "flex" }}>
          <div className="col-sm">
            <div className="text-muted text-center text-sm-start">
              Showing <span className="fw-semibold">{perPageData}</span> of <span className="fw-semibold">{data?.length}</span> Results
            </div>
          </div>
          <div className="col-sm-auto mt-3 mt-sm-0">
            <div className="pagination-wrap hstack justify-content-center gap-2">
              {currentPage <= 1 ? (
                <Link className="page-item pagination-prev disabled" to="#!">
                  Previous
                </Link>
              ) : (
                <Link className={`${currentPage <= 1 ? "page-item pagination-prev disabled" : "page-item pagination-prev"} `} to="#!" onClick={() => handleprevPage()}>
                  Previous
                </Link>
              )}
              <ul className="pagination listjs-pagination mb-0">
                {(pageNumbers || []).map((item: any, index: any) => (
                  <li className={currentPage === item ? "active " : ""} key={index}>
                    <Link className="page" to="#!" id={item} onClick={(e) => handleClick(e)}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>

              {currentPage >= pageNumbers.length ? (
                <Link className="page-item pagination-next disabled" to="#!">
                  Next
                </Link>
              ) : (
                <Link className={`${currentPage <= 1 ? "page-item pagination-next disabled" : "page-item pagination-next"} `} to="#!" onClick={(e: any) => handlenextPage(e)}>
                  Next
                </Link>
              )}
            </div>
          </div>
        </Row>}
    </React.Fragment>
  )
}

export default Pagination