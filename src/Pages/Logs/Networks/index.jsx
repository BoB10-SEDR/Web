import { Row, Col } from '@Components/Grid';

import PageHeading from '@Components/UI/PageHeading';
import Card from '@Components/Card';
import EventViewer from '@Components/EventViewer';
import ModuleInfo from '@Components/ModuleInfo';

import BarDummy from '@Dummy/barChartDummy';
import PieDummy from '@Dummy/pieChartDummy';
import DummyCardSimple from '@Dummy/DummyCardSimple';
import DummyCardEx from '@Dummy/DummyCardEx';

const Networks = () => {
    const { barId, barData, barOptions } = BarDummy;
    const { pieId, pieData, pieOptions } = PieDummy;

    return (
        <div id='networks' className='page'>
            <PageHeading title='Networks' />
            <Row>
                <Col xl={3} md={3} mb>
                    <Card>
                        <DummyCardSimple></DummyCardSimple>
                    </Card>
                    <Card>
                        <DummyCardSimple></DummyCardSimple>
                    </Card>
                </Col>
                <Col xl={9} md={9} mb>
                    <Card>
                        <ModuleInfo />
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={3} mb>
                    <Card>
                        <DummyCardEx height='200px'></DummyCardEx>
                    </Card>
                </Col>
                <Col md={3} mb>
                    <Card>
                        <DummyCardEx height='200px'></DummyCardEx>
                    </Card>
                </Col>
                <Col md={6} mb>
                    <Card>
                        <DummyCardEx height='200px' />
                    </Card>
                </Col>
                <Col md={12} mb>
                    <EventViewer />
                </Col>
            </Row>
        </div>
    );
};

export default Networks;
