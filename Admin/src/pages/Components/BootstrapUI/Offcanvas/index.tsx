import React from 'react'
import { Container } from 'react-bootstrap'
import Backdrop from './Backdrop'
import Default from './Default'
import Placement from './Placement'

const Offcanvas = () => {
  return (
    <React.Fragment>
    <div className="page-content">
        <Container fluid>
            <Default />
            <Placement />
            <Backdrop />
        </Container>
    </div>
    </React.Fragment>
  )
}

export default Offcanvas;