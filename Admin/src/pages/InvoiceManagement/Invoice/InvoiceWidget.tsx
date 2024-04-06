import React from 'react'
import { Col,  Row , Card} from 'react-bootstrap'
import CountUp from 'react-countup';
import { invoiceWidget } from '../../../Common/data';

const InvoiceWidget = () => {
  return (
    <React.Fragment>         

                    <Row>
                        {invoiceWidget.map((invoiceWidgetData:any,key:any)=>(
                            <Col xl={3} md={6} key={key}>                            
                                <Card className={`${invoiceWidgetData.cardClass}`}>
                                    <Card.Body>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <h4 className={`fs-22 fw-semibold ff-secondary mb-2 ${invoiceWidgetData.counterclass}`}><CountUp end={invoiceWidgetData.counterValue} decimals={2} suffix="k" prefix="$"></CountUp></h4>
                                                <p className={`text-uppercase fw-medium fs-14 ${invoiceWidgetData.textClass}  mb-0`}>{invoiceWidgetData.category} 
                                                    <span className={`text-${invoiceWidgetData.arrrowTypeColor} fs-14 mb-0 ms-1`}>
                                                    {invoiceWidgetData.arrowTypeClass === "up" ?
                                                       <i className="ri-arrow-right-up-line fs-13 align-middle"></i>:                                                      
                                                        <i className="ri-arrow-right-down-line fs-13 align-middle"></i>} {invoiceWidgetData.percentage} 
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="avatar-sm flex-shrink-0">
                                                <span className="avatar-title bg-light rounded-circle fs-3">
                                                    <i className={`${invoiceWidgetData.catrgoryIcon} fs-24 text-primary`}></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-end justify-content-between mt-4">
                                            <div>
                                                <span className={`badge ${invoiceWidgetData.badgeClass} me-1`}>{invoiceWidgetData.categoryCount}</span> <span className={`${invoiceWidgetData.textClass}`}>{invoiceWidgetData.categoryCountText}</span>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>     
                        ))}                                           
                    </Row>
    </React.Fragment>
  )
}

export default InvoiceWidget
