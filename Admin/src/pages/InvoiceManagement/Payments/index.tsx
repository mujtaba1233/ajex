import React, {useState} from 'react'
import BreadCrumb from '../../../Common/BreadCrumb'
import { Container } from 'react-bootstrap'
import PaymentTable from './PaymentTable'

const Payments = () => {
  document.title="Payments | Invoika Admin & Dashboard Template";
  
  const [isShow, setIsShow] = useState(false)

    const hidePaymentModal = () => {
        setIsShow(!isShow);
    };

  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <BreadCrumb pageTitle="Payments" title="Payments" />
                <PaymentTable isShow={isShow} hidePaymentModal={hidePaymentModal}/>
            </Container>
        </div>    
    </React.Fragment>
  )
}

export default Payments
