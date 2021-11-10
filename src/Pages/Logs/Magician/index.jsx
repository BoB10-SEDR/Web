import { Row, Col } from '@Components/Grid';
import Card from '@Components/Card';
import EventViewer from '@Components/EventViewer';
import DummyCardEx from '@Dummy/DummyCardEx';

const Magician = () => {
    return (
        <div id='magician'>
            <Row>
                <Col xl={4} md={4} mb>
                    <Card>
                        <DummyCardEx height='300px'></DummyCardEx>
                    </Card>
                </Col>
                <Col xl={8} md={8} mb>
                    <Card>
                        <DummyCardEx height='300px'></DummyCardEx>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12} md={12} mb>
                    <EventViewer />
                </Col>
            </Row>
        </div>
    );
};

export default Magician;
