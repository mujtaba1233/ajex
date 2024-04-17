import React from 'react';
import { Card, Col, Row, Table, Button } from 'react-bootstrap';
import Breadcrumb from '../../../../Common/BreadCrumb';
import {
  BasicRaterExample, RaterWithStepExample, CustomMsgExample, ReadOnlyRaterExample, OnHoverExample, ReasetRaterExample, FractionRate, DisableHover,
  DisableFillHover, RTLSupport, OnPointerEnter, OnPointerLeave, OnPointerMove, ResetRating
} from "./UiRatingCode";
import { Rating } from "react-simple-star-rating";


const RatingRtr = () => {

  document.title = " Ratings | Ajex Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page">
        <Breadcrumb pageTitle="Advance UI" title="Ratings" />
        <Row>
          <Col lg={12}>
            <Card>
              <Card.Header className="align-items-center d-flex">
                <h4 className="card-title mb-0 flex-grow-1">Rater Js</h4>
              </Card.Header>
              <Card.Body>
                <p className="text-muted">Rater-js is a star rating widget for the browser. here are the various examples of rating shown below with variation.</p>
                <div className="live-preview">
                  <div className="table-responsive">
                    <Table className="align-middle mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Title</th>
                          <th scope="col">Example</th>
                          <th scope="col">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Basic Rater</th>
                          <td>
                            <div id="basic-rater" dir="ltr">
                              <Rating size={25} />
                            </div>
                          </td>
                          <td>
                            <pre>
                              <BasicRaterExample />
                            </pre>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Initial Value</th>
                          <td>
                            <div id="rater-step" dir="ltr" >
                              <Rating
                                size={25}
                                initialValue={3}
                                transition
                                onClick={function noRefCheck() { }}
                              />
                            </div>
                          </td>
                          <td>
                            <pre>
                              <RaterWithStepExample />
                            </pre>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Color Range</th>
                          <td>
                            <div id="rater-message" dir="ltr">
                              <Rating
                                size={25}
                                fillColorArray={[
                                  '#f14f45',
                                  '#f16c45',
                                  '#f18845',
                                  '#f1b345',
                                  '#f1d045'
                                ]}
                                transition
                                onClick={function noRefCheck() { }}
                              />
                            </div>
                          </td>
                          <td>
                            <pre>
                              <CustomMsgExample />
                            </pre>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">With Tooltip</th>
                          <td>
                            <div id="rater-unlimitedstar" dir="ltr">
                              <Rating
                                size={25}
                                showTooltip
                                onClick={function noRefCheck() { }}
                              />
                            </div>
                          </td>
                          <td>
                            <pre>
                              <ReadOnlyRaterExample />
                            </pre>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Custom Tooltip</th>
                          <td>
                            <div dir="ltr">
                              <div id="rater-onhover" className="align-middle d-inline">
                                <Rating
                                  size={25}
                                  showTooltip
                                  tooltipArray={[
                                    'Terrible',
                                    'Bad',
                                    'Average',
                                    'Great',
                                    'Prefect'
                                  ]}
                                  onClick={function noRefCheck() { }}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <pre>
                              <OnHoverExample />
                            </pre>
                          </td>
                        </tr>

                        <tr>
                          <th scope="row">Read Only Mode</th>
                          <td>
                            <div dir="ltr">
                              <div id="raterreset" className="align-middle d-inline">
                                <Rating
                                  size={25}
                                  initialValue={2}
                                  readonly
                                  onClick={function noRefCheck() { }}
                                />
                              </div>
                              <span className="clear-rating"></span>
                            </div>
                          </td>
                          <td>
                            <pre>
                              <ReasetRaterExample />
                            </pre>
                          </td>
                        </tr>

                        <tr>
                          <th scope="row">Fraction Rate</th>
                          <td>
                            <div dir="ltr">
                              <div id="raterreset" className="align-middle d-inline">
                                <Rating
                                  size={25}
                                  allowFraction
                                  showTooltip
                                  tooltipArray={[
                                    'Terrible',
                                    'Terrible+',
                                    'Bad',
                                    'Bad+',
                                    'Average',
                                    'Average+',
                                    'Great',
                                    'Great+',
                                    'Awesome',
                                    'Awesome+'
                                  ]}
                                  transition
                                  onClick={function noRefCheck() { }}
                                />
                              </div>
                              <span className="clear-rating"></span>
                            </div>
                          </td>
                          <td>
                            <pre>
                              <FractionRate />
                            </pre>
                          </td>
                        </tr>

                        <tr>
                          <th scope="row">Disable Hover</th>
                          <td>
                            <div dir="ltr">
                              <div id="raterreset" className="align-middle d-inline">
                                <Rating size={25} onClick={function noRefCheck() { }} />
                              </div>
                              <span className="clear-rating"></span>
                            </div>
                          </td>
                          <td>
                            <pre>
                              <DisableHover />
                            </pre>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Disable Fill Hover</th>
                          <td>
                            <div dir="ltr">
                              <div id="raterreset" className="align-middle d-inline">
                                <Rating
                                  disableFillHover
                                  size={25}
                                  onClick={function noRefCheck() { }}
                                />
                              </div>
                              <span className="clear-rating"></span>
                            </div>
                          </td>
                          <td>
                            <pre>
                              <DisableFillHover />
                            </pre>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">RTL Support</th>
                          <td>
                            <div dir="ltr">
                              <div id="raterreset" className="align-middle d-inline">
                                <Rating
                                  size={25}
                                  onClick={function noRefCheck() { }}
                                  rtl
                                  showTooltip
                                  titleSeparator="من"
                                  tooltipArray={[
                                    'Very bad',
                                    'bad',
                                    'medium',
                                    'amazing',
                                    'Prominent'
                                  ]}
                                  tooltipDefaultText="Evaluation"
                                />
                              </div>
                              <span className="clear-rating"></span>
                            </div>
                          </td>
                          <td>
                            <pre>
                              <RTLSupport />
                            </pre>
                          </td>
                        </tr>

                        <tr>
                          <th scope="row">On Pointer Enter</th>
                          <td>
                            <div dir="ltr">
                              <div id="raterreset" className="align-middle d-inline">
                                <Rating
                                  size={25}
                                  onClick={function noRefCheck() { }}
                                  onPointerEnter={function noRefCheck() { }}
                                />
                              </div>
                              <span className="clear-rating"></span>
                            </div>
                          </td>
                          <td>
                            <pre>
                              <OnPointerEnter />
                            </pre>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">On Pointer Leave</th>
                          <td>
                            <div dir="ltr">
                              <div id="raterreset" className="align-middle d-inline">
                                <Rating
                                  size={25}
                                  onClick={function noRefCheck() { }}
                                  onPointerLeave={function noRefCheck() { }}
                                />
                              </div>
                              <span className="clear-rating"></span>
                            </div>
                          </td>
                          <td>
                            <pre>
                              <OnPointerLeave />
                            </pre>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">On Pointer Move</th>
                          <td>
                            <div dir="ltr">
                              <div id="raterreset" className="align-middle d-inline">
                                <Rating
                                  size={25}
                                  onClick={function noRefCheck() { }}
                                  onPointerMove={function noRefCheck() { }}
                                />
                              </div>
                              <span className="clear-rating"></span>
                            </div>
                          </td>
                          <td>
                            <pre>
                              <OnPointerMove />
                            </pre>
                          </td>
                        </tr><tr>
                          <th scope="row">Reset Rating</th>
                          <td>
                            <div dir="ltr">
                              <div id="raterreset" className="align-middle d-inline">
                                <Rating
                                  size={25}
                                  initialValue={0}
                                  onClick={function noRefCheck() { }}
                                />
                                <Button
                                  onClick={function noRefCheck() { }}
                                  style={{
                                    marginLeft: 10
                                  }}
                                >
                                  reset
                                </Button>
                              </div>
                              <span className="clear-rating"></span>
                            </div>
                          </td>
                          <td>
                            <pre>
                              <ResetRating />
                            </pre>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default RatingRtr;