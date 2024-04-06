import React from 'react'
import { Card, Col, Dropdown } from 'react-bootstrap'
import SimpleBar from 'simplebar-react';
import { recentTrasaction } from '../../Common/data/index';

const RecentTransaction = () => {
  return (
    <React.Fragment>
                <Col xl={3}>
                            <Card>
                                <Card.Body>
                                    <div className="d-flex align-items-start mb-1">
                                        <div className="flex-grow-1">
                                            <h5 className="card-title">Recent Transaction</h5>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Dropdown>
                                                <Dropdown.Toggle className="text-muted arrow-none" as="a">
                                                    <i className="las la-ellipsis-h fs-20"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-end">
                                                    <Dropdown.Item>Yearly</Dropdown.Item>
                                                    <Dropdown.Item>Monthly</Dropdown.Item>
                                                    <Dropdown.Item>Weekly</Dropdown.Item>
                                                    <Dropdown.Item>Today</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>

                                    <SimpleBar className="mx-n3 px-3" style={{maxHeight: "418px"}}>
                                    {recentTrasaction.map((recentTransactionData: any, key: any,index) => (
                                            <div key={key}>
                                                <p className="text-muted mb-0">{recentTransactionData.day}</p>
                                                {(recentTransactionData.transactionDetails || []).map((transactionDetailsData: any) => (
                                                    <div className="border-bottom sales-history" key={transactionDetailsData.id}>
                                                        <div className="d-flex align-items-center">
                                                            <div className="avatar-sm flex-shrink-0">
                                                                <span className="avatar-title bg-primary rounded-circle fs-3">
                                                                    <i className={`${transactionDetailsData.transactionModeIcon} fs-22`}></i>
                                                                </span>
                                                            </div>
                                                            <div className="flex-grow-1 ms-3 overflow-hidden">
                                                                <h5 className="fs-15 mb-1 text-truncate">{transactionDetailsData.title}</h5>
                                                                <p className="fs-14 text-muted text-truncate mb-0">{transactionDetailsData.date}</p>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <span className={`badge fs-12 ${transactionDetailsData.badgeColor}`}>
                                                                    {transactionDetailsData.transactionPercentage}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </SimpleBar>
                                </Card.Body>
                            </Card>
                </Col>
    </React.Fragment>
  )
}

export default RecentTransaction
