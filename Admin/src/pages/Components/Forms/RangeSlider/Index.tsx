import Breadcrumb from '../../../../Common/BreadCrumb';
import React from 'react'
import { Container } from 'react-bootstrap';
import BootstrapRange from './BootstrapRange';
import NouiSliders from './NouiSlider';
import ColorScheme from './ColorScheme';
// import SizeStyling from './SizeStyling';

const RangeSliders = () => {
    document.title = "Range Slider | Ajex"
    return (
        <React.Fragment>
            <Container fluid>
            <Breadcrumb pageTitle="Forms" title="Range Slider" />

                {/* <BootstrapRange/> */}
                {/* <NouiSliders/> */}
                {/* <ColorScheme/> */}
                {/* <SizeStyling/> */}
            </Container>
        </React.Fragment>
    )
}

export default RangeSliders