import React from 'react'
import DefaultAlerts from './DefaultAlerts'
import { Container } from 'react-bootstrap'
import BorderlessAlerts from './BorderlessAlerts'
import LiveAlert from './LiveAlert'
import DismissingAlerts from './DismissingAlerts'
import LinkColorAlerts from './LinkColorAlerts'
import OutlineAlerts from './OutlineAlerts'
import LeftBorderAlerts from './LeftBorderAlerts'
import LabelIconAlerts from './LabelIconAlerts'
import AdditionalContentAlerts from './AdditionalContentAlerts'
import TopBorderwithOutlineAlerts from './TopBorderwithOutlineAlerts'
import LabelIconArrowAlerts from './LabelIconArrowAlerts'
import RoundedLabelIconAlerts from './RoundedLabelIconAlerts'
import SolidAlerts from './SolidAlerts'
import ModernAlerts from './ModernAlerts'

const Alerts = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <DefaultAlerts />
                    <BorderlessAlerts />
                    <DismissingAlerts />
                    <LinkColorAlerts />
                    <LiveAlert />
                    <OutlineAlerts />
                    <LeftBorderAlerts />
                    <ModernAlerts/>
                    <LabelIconAlerts />
                    <AdditionalContentAlerts />
                    <TopBorderwithOutlineAlerts />
                    <LabelIconArrowAlerts />
                    <RoundedLabelIconAlerts />
                    <SolidAlerts />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Alerts