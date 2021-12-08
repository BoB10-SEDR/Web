import { Row, Col } from '@Components/Grid';
import '@Styles/inspection.css';
import { DummyMockTest } from '@Dummy/DummyImgs.jsx';
import TestDashboard from '@Components/TestDashboard';
import InspectionTable from '@Components/InspectionTable';

const Inspection = () => {
    return (
        <div id='inspection'>
            <Row>
                <Col lg={12}>
                    <InspectionTable />
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <TestDashboard />
                </Col>
            </Row>

            <Row>
                <Col lg={12}>{/* <Status status='PENDING' /> */}</Col>
            </Row>
        </div>
    );
};

export default Inspection;
