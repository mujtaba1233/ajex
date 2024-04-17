import React from 'react'
import {Col, Row } from 'react-bootstrap';
import ThisWeekOverview from './ThisWeekOverview';

const ProffesionalWidgets = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={12}>
                    <ThisWeekOverview />
                </Col>
            </Row>

        </React.Fragment>
    )
}

export default ProffesionalWidgets
