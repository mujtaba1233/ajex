import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer">
                <Container fluid>
                    <Row>
                        <Col sm={6}>
                            {new Date().getFullYear()} © Ajex..
                        </Col>
                        <Col sm={6}>
                            <div className="text-sm-end d-none d-sm-block">
                                Design & Develop by Digiex
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>           
        </React.Fragment>
    )
}

export default Footer;