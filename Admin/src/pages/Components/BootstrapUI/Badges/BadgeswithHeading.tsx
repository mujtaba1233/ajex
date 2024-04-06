import React from 'react';
import { Badge, Card, Col, Row } from 'react-bootstrap';

const BadgeswithHeading = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Badges with Heading</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Example of the badge used in the HTML Heading.</p>
                            <h1>Example heading <Badge bg="secondary">New</Badge></h1>
                            <h2>Example heading <Badge bg="secondary">New</Badge></h2>
                            <h3>Example heading <Badge bg="secondary">New</Badge></h3>
                            <h4>Example heading <Badge bg="secondary">New</Badge></h4>
                            <h5>Example heading <Badge bg="secondary">New</Badge></h5>
                            <h6 className="mb-0">Example heading <span className="badge text-bg-secondary">New</span></h6>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default BadgeswithHeading