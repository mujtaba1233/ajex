import React, { useCallback, useEffect, useMemo, useState } from 'react';
import TableContainer from "../../../Common/Tabledata/TableContainer";
import { DeleteModal } from '../../../Common/DeleteModal';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Col, Dropdown, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { createSelector } from 'reselect';
import {
  getClientInvoices as onGetClientInvoices,
  deleteClientInvoices as onDeleteClientInvoices
} from '../../../slices/thunk';
import { handleSearchData } from '../../../Common/Tabledata/SorttingData';
import NoSearchResult from '../../../Common/Tabledata/NoSearchResult';
import EditInvoice from '../../../Common/CrudModal/EditInvoice';
import InvoiceWidget from './InvoiceWidget';
import * as XLSX from 'xlsx';
import { toast } from 'react-toastify';
import { setIsSuccess } from '../../../slices/invoices/reducer';
import { useProfile } from '../../../Hooks/UserHooks';

const InvoiceTable = () => {

  const { userProfile } = useProfile();
  const dispatch = useDispatch();

  const selectClientInvoiceList = createSelector(
    (state: any) => state.Invoice,
    (invoices: any) => ({
      clientInvoicesList: invoices.clientInvoicesList
    })
  );


  const { clientInvoicesList } = useSelector(selectClientInvoiceList)

  const [invoices, setInvoices] = useState<any>([])
  let navigate = useNavigate();
  const { isSuccess } = useSelector((state: any) => state.Invoice);

  useEffect(() => {
    dispatch(onGetClientInvoices({limit: undefined}))
  }, [dispatch]);

  useEffect(() => {
    setInvoices(clientInvoicesList)
  }, [clientInvoicesList])

  // Delete modal

  const [delet, setDelet] = useState<boolean>(false);
  const [deletid, setDeletid] = useState<any>();

  const handleDeleteModal = (id: any) => {
    setDelet(!delet);
    console.log(id, "This is the id")
    setDeletid(id);
  }

  const handleDeleteId = () => {
    console.log(deletid, "This is the id")
    dispatch(onDeleteClientInvoices(deletid.id))
    setDelet(false)
  }

  // search
  const handleSearch = (ele: any) => {
    let item = ele.value.toLowerCase();

    if (item === "All Tasks") {
      setInvoices([...clientInvoicesList]);
    } else {
      handleSearchData({ data: clientInvoicesList, item: item, setState: setInvoices })
    }
  }
  const downloadSingleIvoice = (invoice: any) => {
    const invoiceToDownload = [{
      'Invoice Number': invoice.invoiceNumber,
      'Amount': invoice.amount,
      'Priority': invoice.priority,
      'Status': invoice.status,
      'Type of Expense': invoice.typeOfExpense,
      'Expense Type': invoice.expenseType,
      'Line of Business': invoice.lineOfBusiness,
      'Department Name': invoice.departmentName,
      'Serial Number': invoice.serialNumber || '', // Handle null value for serialNumber
      ...(userProfile.role === 'Super Admin' || userProfile.role === 'Admin' ? {
        'Bank': invoice.bank || '',
        'Bank Reference': invoice.bankReference || '',
        'Bank Amount': invoice.bankAmount || '',
        'Payment Status': invoice.paymentStatus
      } : {}),
      'Currency': invoice.currency,
      'Business Unit': invoice.businessUnit,
      'Description': invoice.description,
      'User': `${invoice.User.firstName} ${invoice.User.lastName}`,
      'Created At': invoice.createdAt.split('T')[0], // Format createdAt to remove time
    }]
    // Convert the array of objects to a worksheet
    const worksheet = XLSX.utils.json_to_sheet(invoiceToDownload, { skipHeader: false });
    // Create a workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Export the workbook to an Excel file
    XLSX.writeFile(workbook, `${invoice.invoiceNumber}.xlsx`);
  }
  const handleExport = () => {
    // Map invoices to include additional fields and format user full name
    const invoicesWithUserFullName = invoices.map((invoice: any) => ({
      'Invoice Number': invoice.invoiceNumber,
      'Amount': invoice.amount,
      'Priority': invoice.priority,
      'Status': invoice.status,
      'Type of Expense': invoice.typeOfExpense,
      'Expense Type': invoice.expenseType,
      'Line of Business': invoice.lineOfBusiness,
      'Department Name': invoice.departmentName,
      'Serial Number': invoice.serialNumber || '', // Handle null value for serialNumber
      ...(userProfile.role === 'Super Admin' || userProfile.role === 'Admin' ? {
        'Bank': invoice.bank || '',
        'Bank Reference': invoice.bankReference || '',
        'Bank Amount': invoice.bankAmount || '',
        'Payment Status': invoice.paymentStatus
      } : {}),
      'Currency': invoice.currency,
      'Business Unit': invoice.businessUnit,
      'Description': invoice.description,
      'User': `${invoice.User.firstName} ${invoice.User.lastName}`,
      'Created At': invoice.createdAt.split('T')[0], // Format createdAt to remove time
    }));

    // Convert the array of objects to a worksheet
    const worksheet = XLSX.utils.json_to_sheet(invoicesWithUserFullName, { skipHeader: false });
    console.log(worksheet, "This is the work sheet")
    // Create a workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Export the workbook to an Excel file
    XLSX.writeFile(workbook, 'output.xlsx');
  };
  // edit data

  const [editInvoices, setEditInvoices] = useState<boolean>(false);
  const [edit, setEdit] = useState<any>();

  const handleCloseEdit = () => setEditInvoices(false);
  const handleEditInvoices = (item: any) => {

    setEditInvoices(true)
    setEdit({
      id: item.id,
      invoiceId: item.invoiceId,
      clientImage: item.clientImage,
      clientName: item.clientName,
      email: item.email,
      date: item.date,
      billed: item.billed,
      status: item.status
    })
  }

  interface columnsType {
    Header: any,
    accessor: string,
    key?: string,
    Filter: boolean,
    isSortable: boolean,
    Cell?: (cell: any) => any
  }

  const columns: columnsType[] = useMemo(
    () => [
      {
        Header: () => (
          <Form>
            <Form.Check type="checkbox" />
          </Form>
        ),
        accessor: "id",
        key: "id",
        Filter: false,
        isSortable: false,
        width: 50,
        Cell: () => (
          <Form>
            <Form.Check type="checkbox" />
          </Form>
        ),
      },
      {
        Header: "INVOICE #",
        accessor: "invoiceNumber",
        Filter: false,
        isSortable: true,

      },
      {
        Header: "CLIENT",
        accessor: "userId",
        Filter: false,
        isSortable: true,
        Cell: (cell: any) => {
          return (
            <div>
              <Link to="#" className="text-body align-middle fw-medium">{cell.row.original.User.firstName + " " + cell.row.original.User.lastName}</Link>
            </div>
          )
        }
      },
      {
        Header: "LOB",
        accessor: "lineOfBusiness",
        Filter: false,
        isSortable: true
      },
      {
        Header: "DATE",
        accessor: "createdAt",
        Filter: false,
        isSortable: true,
      },
      {
        Header: "DEPARTMENT",
        accessor: "departmentName",
        Filter: false,
        isSortable: true
      },
      {
        Header: "Type of Expense",
        accessor: "expenseType",
        Filter: false,
        isSortable: true,
        Cell: (cell: any) => {
          return (
            <div>
              <Link to={'#'} className="text-body align-middle fw-medium">{cell.row.original.expenseType + ", " + cell.row.original.typeOfExpense}</Link>
            </div>
          )
        }
      },
      {
        Header: "STATUS",
        accessor: "status",
        Filter: false,
        isSortable: true,
        Cell: (cell) => {
          switch (cell.row.original.status) {
            case "Paid":
              return <span className="badge bg-success-subtle text-success p-2">{cell.row.original.status}</span>
            case "Unpaid":
              return <span className="badge bg-warning-subtle text-warning p-2">{cell.row.original.status}</span>
            case "Cancel":
              return <span className="badge bg-danger-subtle text-danger p-2">{cell.row.original.status}</span>
            case "Refund":
              return <span className="badge bg-info-subtle text-info p-2">{cell.row.original.status}</span>
            default:
              return <span className="badge bg-success-subtle text-success p-2">{cell.row.original.status}</span>
          }
        }
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
                  <Link to={`/invoice-add/${cell.row.original.id}`} className="text-body align-middle fw-medium">View</Link>


                </Dropdown.Item>
              </li>
              {/* <li>
                <Dropdown.Item onClick={() => { const item = cell.row.original; handleEditInvoices(item); }}
                ><i className="las la-pen fs-18 align-middle me-2 text-muted"></i>
                  <Link to={`/invoice-add/${cell.row.original.id}`} className="text-body align-middle fw-medium">Edit</Link>
                </Dropdown.Item>
              </li> */}
              <li>
                <Dropdown.Item onClick={() => downloadSingleIvoice(cell.row.original)} to="#"><i className="las la-file-download fs-18 align-middle me-2 text-muted"></i>
                  Download
                </Dropdown.Item>
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
  useEffect(() => {
    if (isSuccess) {
      // toast.success('Invoice Added Successfully');
      dispatch(setIsSuccess(false))
      // setTimeout(() => {
      // }, 2000)
    }
  }, [isSuccess])
  return (
    <React.Fragment>
      <Row className="pb-4 gy-3">
        {
          (userProfile.role !== 'Super Admin' || userProfile.role !== 'Admin') && <Col sm={4}>
            <Link to="/invoice-add" className="btn btn-primary addMembers-modal"><i className="las la-plus me-1"></i> Add Requests</Link>
          </Col>
        }
        <div className="col-sm-auto ms-auto">
          <div className="d-flex gap-3">
            <div className="search-box">
              <Form.Control type="text" placeholder="Search for name or designation..." onChange={(e: any) => handleSearch(e.target)} />
              <i className="las la-search search-icon"></i>
            </div>
            <Dropdown>
              <Dropdown.Toggle as="button" className="btn btn-soft-info btn-icon fs-14 arrow-none"><i className="las la-ellipsis-v fs-18"></i></Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Print</Dropdown.Item>
                <Dropdown.Item onClick={handleExport}>Export to Excel</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </Row>

      <InvoiceWidget />


      <Row>
        <Col xl={12}>
          <Card>
            <Card.Body>
              {invoices && invoices.length > 0 ?
                <TableContainer
                  isPagination={true}
                  columns={columns}
                  data={invoices || []}
                  customPageSize={9}
                  divClassName="table-card table-responsive table-min-height"
                  tableClass="table-hover table-nowrap align-middle mb-0"
                  isBordered={false}
                  PaginationClass="align-items-center mt-4 gy-3"
                />
                : <NoSearchResult />
              }
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Delete */}

      <DeleteModal show={delet} handleClose={handleDeleteModal} deleteModalFunction={handleDeleteId} />
      <ToastContainer />

      <EditInvoice isShow={editInvoices} handleClose={handleCloseEdit} edit={edit} />

    </React.Fragment>
  )
}

export default InvoiceTable
