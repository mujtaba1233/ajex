import React,{useCallback, useEffect, useMemo, useState} from 'react'
import { Card, Col, Dropdown, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TableContainer from '../../../Common/Tabledata/TableContainer'
import { useDispatch , useSelector} from 'react-redux';
import { getProductList as onGetProductList,
        deleteProductList as onDeleteProductList         
        } from '../../../slices/thunk';
import { ToastContainer } from 'react-toastify';
import { createSelector } from 'reselect';
import NoSearchResult from '../../../Common/Tabledata/NoSearchResult';
import { DeleteModal } from '../../../Common/DeleteModal';
import { handleSearchData } from '../../../Common/Tabledata/SorttingData';
import EditProductList from '../../../Common/CrudModal/EditProductList';

const ProductlistTable = () => {

    const dispatch = useDispatch();

    const selectProductList = createSelector(
        (state: any) => state.Invoice,
        (invoices:any) => ({
          productList: invoices.productList
        })
    );

    const {productList} = useSelector(selectProductList)

    const [products,setProducts] = useState<any>([])

    useEffect(() => {
        dispatch(onGetProductList())
    }, [dispatch]);

    useEffect(() => {
        setProducts(productList)
    }, [productList])

    // Delete modal

    const [delet, setDelet] = useState<boolean>(false);
    const [deletid, setDeletid] = useState<any>();
    const handleDeleteModal = useCallback((id: any) => {
        setDelet(!delet);
        setDeletid(id);
    }, [delet])

    const handleDeleteId = () => {
        dispatch(onDeleteProductList(deletid.id))
        setDelet(false)
    }

    // search
    const handleSearch = (ele: any) => {
      let item = ele.value;

      if (item === "All Tasks") {
          setProducts([...productList]);
      } else {
          handleSearchData({ data: productList, item: item, setState: setProducts })
      }
  }

  // edit data

  const [editProduct, setEditProduct] = useState<boolean>(false);
  const [edit, setEdit] = useState<any>();

  const handleCloseEdit = () => setEditProduct(false);
  const handleEditProduct = (item: any) => {    
    
    setEditProduct(true)
      setEdit({
          id: item.id,
          productName: item.productName,
          productImage: item.productImage,
          inStock: item.inStock,
          rate: item.rate,
          category: item.category,
          price: item.price
      })
  }

    interface columnsType {
        Header: any,
        accessor: string,
        key?: string,
        Filter: boolean,
        isSortable: boolean,
        Cell?: (cell: any) => JSX.Element
      }

      const columns: columnsType[] = useMemo(
        () => [
          {
            Header: () => (
              <Form>
                <Form.Check type="checkbox"/>
              </Form>
            ),
            accessor: "id",
            key: "id",
            Filter: false,
            isSortable: false,
            width:50,
            Cell: () => (
              <Form>
                <Form.Check type="checkbox"/>
              </Form>
            ),
          },         
          {
            Header: "PRODUCT NAME",
            accessor: "productName",
            Filter: false,
            isSortable: true,
            Cell: (cell: any) => {
    
              return (         
                <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 me-3 avatar-sm">
                        <div className="avatar-title bg-light rounded"> <img src={cell.row.original.productImage} alt="" className="avatar-xs" /> 
                      </div>
                    </div>
                    <div className="flex-grow-1">
                        <h6 className="fs-16 mb-1">{cell.row.original.productName}</h6>
                    </div>
                </div>
              )
            }
          },          
          {
            Header: "CATEGORY",
            accessor: "category",
            Filter: false,
            isSortable: true
          },
          {
            Header: "IN STOCK",
            accessor: "inStock",
            Filter: false,
            isSortable: true,
          },
          {
            Header: "RATE",
            accessor: "rate",
            Filter: false,
            isSortable: true,
            Cell: (cell: any) => (
                        <span className="badge bg-light text-body fs-12 fw-medium"><i className="mdi mdi-star text-warning me-1"></i>{cell.row.original.rate}</span>
                    )
                },
          
          {
            Header: "PRICE",
            accessor: "price",
            Filter: false,
            isSortable: true,
            Cell: (cell: any) => (
              <>${cell.row.original.price}</>
          ),
          }, 

          {
            Header: "Action",
            accessor: "action",
            Filter: false,
            isSortable: false,
            Cell: (cell: any) => (
                        <Dropdown>
                            <Dropdown.Toggle as="button" className="btn btn-soft-secondary btn-sm arrow-none">
                                <i className="las la-ellipsis-h align-middle fs-18"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-end">
                                <li>
                                    <Dropdown.Item to="#"><i className="las la-eye fs-18 align-middle me-2 text-muted"></i>
                                        View</Dropdown.Item>
                                </li>
                                <li>
                                    <Dropdown.Item onClick={() => { const item = cell.row.original; handleEditProduct(item); }}
                                    ><i className="las la-pen fs-18 align-middle me-2 text-muted"></i>
                                        Edit</Dropdown.Item>
                                </li>
                                <li>
                                    <Dropdown.Item to="#"><i className="las la-file-download fs-18 align-middle me-2 text-muted"></i>
                                        Download</Dropdown.Item>
                                </li>
                                <li className="dropdown-divider"></li>
                                <li>
                                    <Dropdown.Item className="remove-item-btn" to="#"
                                        onClick={() => { const item = cell.row.original; handleDeleteModal(item); }}>
                                        <i className="las la-trash-alt fs-18 align-middle me-2 text-muted"></i>
                                        Delete
                                    </Dropdown.Item>
                                </li>
                            </Dropdown.Menu>
                        </Dropdown>
            )
          },
        ], [handleDeleteModal])
  return (
                  <React.Fragment>
                    <Row className="pb-4 gy-3">
                        <Col sm={4}>
                            <Link to="/product-add" className="btn btn-primary addtax-modal"><i className="las la-plus me-1"></i> Add Product</Link>
                        </Col>

                        <div className="col-sm-auto ms-auto">
                           <div className="d-flex gap-3">
                            <div className="search-box">
                                <Form.Control type="text" id="searchMemberList" placeholder="Search for Result" onChange={(e: any) => handleSearch(e.target)}/>
                                <i className="las la-search search-icon"></i>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle as="button" className="btn btn-soft-info btn-icon fs-14 arrow-none"><i className="las la-ellipsis-v fs-18"></i></Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item to="#">All</Dropdown.Item>
                                    <Dropdown.Item to="#">Last Week</Dropdown.Item>
                                    <Dropdown.Item to="#">Last Month</Dropdown.Item>
                                    <Dropdown.Item to="#">Last Year</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                           </div>
                        </div>
                    </Row>

                    <Row>
                        <Col xl={12}>
                            <Card>
                                <Card.Body>
                                {products && products.length > 0 ?        
                                <TableContainer
                                    isPagination={true}
                                    columns={columns}
                                    data={products || []}
                                    customPageSize={8}
                                    divClassName="table-card table-responsive"
                                    tableClass="table-hover table-nowrap align-middle mb-0"
                                    isBordered={false}
                                    PaginationClass="align-items-center mt-4 gy-3"
                                />: <NoSearchResult />
                              }       
                                    
                                </Card.Body>
                            </Card>                            
                        </Col>
                    </Row>

                    <DeleteModal show={delet} handleClose={handleDeleteModal} deleteModalFunction={handleDeleteId} />
                    <ToastContainer />

                    <EditProductList isShow={editProduct} handleClose={handleCloseEdit} edit={edit} />

    </React.Fragment>
  )
}

export default ProductlistTable
