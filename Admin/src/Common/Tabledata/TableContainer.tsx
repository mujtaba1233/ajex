import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  useFilters,
  useExpanded,
  usePagination,
} from "react-table";
import { Table, Row, Col } from "react-bootstrap";
import { Filter, DefaultColumnFilter } from "./Filter";

import {
  ProductsGlobalFilter
} from "../GlobalSearchFilter";
import { Link } from "react-router-dom";

interface GlobalFilterProps {
  preGlobalFilteredRows?: any;
  globalFilter?: any;
  setGlobalFilter?: any;
  SearchPlaceholder?: string;
  isProductsFilter?: boolean;
}

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  SearchPlaceholder,
  isProductsFilter
}: GlobalFilterProps) {
  const [value, setValue] = React.useState(globalFilter);
  const onChange = (value: any) => {
    setGlobalFilter(value || undefined);
  };

  return (
    <React.Fragment>
      {isProductsFilter && (
        <ProductsGlobalFilter />
      )}
      <Col className="col-sm">
        <div className="d-flex justify-content-sm-end">
          <label htmlFor="search-bar-0" className="search-label d-flex">
            <i className="bx bx-search-alt search-icon" style={{ lineHeight: "55px" }}></i>
            <input
              onChange={e => {
                setValue(e.target.value);
                onChange(e.target.value);
              }}
              id="search-bar-0"
              type="text"
              className="form-control"
              placeholder={SearchPlaceholder}
              value={value || ""}
            />
          </label>
        </div>
      </Col>

    </React.Fragment>
  );
}

interface TableContainerProps {
  columns?: any;
  data?: any;
  isGlobalFilter?: any;
  isAddOptions?: any;
  divClassName?: any;
  tableClassName?: any;
  theadClassName?: any,
  tableClass?: any;
  theadClass?: any;
  isBordered?: boolean;
  isAddUserList?: any;
  handleOrderClicks?: any;
  handleUserClick?: any;
  handleCustomerClick?: any;
  isAddCustList?: any;
  customPageSize?: any;
  className?: any;
  customPageSizeOptions?: any;
  iscustomPageSize?: boolean;
  SearchPlaceholder?: string;
  isProductsFilter?: boolean;
  isPagination?: boolean;
  PaginationClass?: any;
}

const TableContainer = ({
  columns,
  data,
  tableClass,
  theadClass,
  divClassName,
  isBordered,
  isGlobalFilter,
  isProductsFilter,
  isPagination,
  customPageSize,
  iscustomPageSize,
  customPageSizeOptions,
  SearchPlaceholder,
  PaginationClass
}: TableContainerProps) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: DefaultColumnFilter },
      initialState: {
        pageIndex: 0,
        pageSize: customPageSize,
        sortBy: [
          {
            desc: true,
            // asce: true,
          },
        ],
      },
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination
  );

  // const generateSortingIndicator = (column: any) => {
  //   return column.isSorted ? (column.isSortedDesc ? <span>&#9650;</span> : <span>&#9660;</span>) : "";
  // };


  const onChangeInSelect = (event: any) => {
    setPageSize(Number(event.target.value));
  };

  return (
    <Fragment>
      {(iscustomPageSize || isGlobalFilter) && (
        <Row className="mb-2">
          {iscustomPageSize && (
            <Col md={customPageSizeOptions ? 2 : 1}>
              <select
                className="form-select"
                value={pageSize}
                onChange={onChangeInSelect}
              >
                {[10, 20, 30, 40, 50].map(pageSize => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </Col>
          )}
          {isGlobalFilter && (
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
              SearchPlaceholder={SearchPlaceholder}
              isProductsFilter={isProductsFilter}
            />
          )}
        </Row>
      )}

<div className={divClassName ? divClassName : "table-responsive"} >
        <Table {...getTableProps()} className={tableClass} bordered={isBordered}>
          <thead className={theadClass}>
            {headerGroups.map((headerGroup: any) => (
              <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((columns: any) => (
                  <th key={columns.id} className={`${columns.isSortable ? "sort" : ""} ${columns.istext ? "text-start" : ""}`} {...columns.getSortByToggleProps()}>
                    {/* <div > */}
                    {columns.render("Header")}
                    {/* </div> */}
                    <Filter column={columns} />
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row: any) => {
              
              
              prepareRow(row);
              return (
                <Fragment key={row.getRowProps().key}>
                  <tr>
                    {row.cells.map((cell: any) => {
                      return (
                        <td key={cell.id} {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </Table>
      </div>


      {
        isPagination && (
          <Row className={PaginationClass} id="pagination-element">
            <div className="col-sm">
              <div className="text-muted">Showing<span className="fw-semibold ms-1">{page.length}</span> of <span className="fw-semibold">{data.length}</span> Results
              </div>
            </div>
            <div className="col-sm-auto ms-auto">           
                <ul className="pagination mb-0">
                  <li className={!canPreviousPage ? "page-item disabled" : "page-item"}>
                    <Link to="#" className="page-link pagination-prev" onClick={previousPage}>Previous</Link>
                  </li>
                  {pageOptions.map((item: any, key: number) => (
                    <React.Fragment key={key}>
                      <li className="page-item">
                        <Link to="#" className={pageIndex === item ? "page-link active" : "page-link"} onClick={() => gotoPage(item)}>{item + 1}</Link>
                      </li>
                    </React.Fragment>
                  ))}
                  <li className={!canNextPage ? "page-item disabled" : "page-item"}>
                    <Link to="#" className="page-link pagination-next" onClick={nextPage}>Next</Link>
                  </li>
                </ul>
                
            </div>
          </Row>
        )
      }                      
    </Fragment>
  );
};

TableContainer.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
};

export default TableContainer;