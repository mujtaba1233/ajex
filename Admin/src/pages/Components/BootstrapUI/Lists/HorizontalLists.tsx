import React from 'react';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';

const HorizontalLists = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Horizontal List</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>list-group-horizontal</code> class to change the layout of list group items from vertical to horizontal across all breakpoints.</p>
                            <div>
                                <ListGroup horizontal className="mb-3">
                                    <ListGroup.Item>Inbox</ListGroup.Item>
                                    <ListGroup.Item>Work</ListGroup.Item>
                                    <ListGroup.Item>Shopping</ListGroup.Item>
                                </ListGroup>
                                <ListGroup horizontal className="justify-content-center mb-3">
                                    <ListGroup.Item>Inbox</ListGroup.Item>
                                    <ListGroup.Item>Work</ListGroup.Item>
                                    <ListGroup.Item>Shopping</ListGroup.Item>
                                </ListGroup>
                                <ListGroup horizontal className="justify-content-end">
                                    <ListGroup.Item>Inbox</ListGroup.Item>
                                    <ListGroup.Item>Work</ListGroup.Item>
                                    <ListGroup.Item>Shopping</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Card.Body>                       
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default HorizontalLists;