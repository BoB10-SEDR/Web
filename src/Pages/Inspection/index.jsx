import Card from '@Components/Card';
import { Row, Col } from '@Components/Grid';
import '@Styles/inspection.css';
import { DummyMockTest } from '@Dummy/DummyImgs.jsx';
import TestDashboard from '@Components/TestDashboard';

const Inspection = () => {
    return (
        <div id='inspection'>
            <Row>
                <Col lg={12}>
                    <Card title='점검 항목 리스트'>
                        {/* TODO_P :: MockTest 관련 Table */}
                        <DummyMockTest />
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <TestDashboard />
                </Col>
            </Row>
        </div>
    );
};

export default Inspection;
