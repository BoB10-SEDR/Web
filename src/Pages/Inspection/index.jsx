import Card from '@Components/Card';
import { Row, Col } from '@Components/Grid';
import Table from '@Components/Table';
import PageHeading from '@Components/UI/PageHeading';
import '@Styles/inspection.css';
import { DummyMockTest, DummyHistory } from '@Dummy/DummyImgs.jsx';

const Inspection = () => {
    return (
        <div id='inspection'>
            {/* <PageHeading title='Pen-testing' noToggle /> */}

            <Row>
                <Col lg={12}>
                    <Card title='Checklist'>
                        {/* TODO_P :: MockTest 관련 Table */}
                        <DummyMockTest />
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <Card title='History'>
                        {/* TODO_P :: History 관련 Table */}
                        <DummyHistory />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Inspection;

