import React from 'react'
import PaymentSummaryTable from './PaymentSummaryTable'
import BreadCrumb from '../../../../Common/BreadCrumb'
import { Container } from 'react-bootstrap'

const PaymentSummary = () => {
  return (
    <React.Fragment>
        <div className="page-content">
                <Container fluid>
                    <BreadCrumb pageTitle="Report" title="Payment Summary" />                    
                    <PaymentSummaryTable/>
                </Container>
        </div>
    </React.Fragment>
  )
}

export default PaymentSummary
