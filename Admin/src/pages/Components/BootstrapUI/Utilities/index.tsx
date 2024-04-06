import React from 'react'
import { Container } from 'react-bootstrap'
import BorderRadius from './BorderRadius';
import Borders from './Borders';
import CustomClass from './CustomClass';
import DisplayProperty from './DisplayProperty';
import Overflow from './Overflow';
import Position from './Position';
import SelectionPointer from './SelectionPointer';
import Shadows from './Shadows';
import Stacks from './Stacks';
import WidthHeight from './WidthHeight';

const Utilities = () => {
  return (
    <div className="page-content">
        <Container fluid>
            <Borders />
            <BorderRadius />
            <DisplayProperty />
            <CustomClass />
            <Stacks />
            <SelectionPointer />
            <Overflow />
            <Position />
            <Shadows />
            <WidthHeight />
        </Container>
    </div>
  )
}

export default Utilities;