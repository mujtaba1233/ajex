import React from 'react'
import { Container } from 'react-bootstrap';
import BreadCrumb from '../../Common/BreadCrumb';
import ProffesionalWidgets from './ProffesionalWidgets';
import PaymentActivity from './PaymentActivity';
import QuickInvoice from './QuickInvoice';
import SalesRevenue from './SalesRevenue';


const Dashboard = () => {
  document.title = "Dashboard | Invoika Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
            <Container fluid>
                <BreadCrumb pageTitle="Dashboard" title="Dashboard" />
                <ProffesionalWidgets/>
                <PaymentActivity/>
                <QuickInvoice/>
                <SalesRevenue/>
                </Container>
                </div>
    </React.Fragment>
  )
}

export default Dashboard