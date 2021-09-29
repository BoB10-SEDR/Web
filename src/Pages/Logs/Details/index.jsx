import { Row, Col } from '@Components/Grid';

import PageHeading from '@Components/UI/PageHeading';
import Card from '@Components/Card';
import BarDummy from '@Dummy/barChartDummy';
import PieDummy from '@Dummy/pieChartDummy';
import DummyCardSimple from '@Dummy/DummyCardSimple';
import DummyCardEx from '@Dummy/DummyCardEx';

const Details = () => {
    const { barId, barData, barOptions } = BarDummy;
    const { pieId, pieData, pieOptions } = PieDummy;

    return (
        <div id='detected' className='page'>
            <PageHeading title='Details' />
            <Row>
                <Col xl={3} md={3} mb>
                    <Card>
                        <DummyCardSimple></DummyCardSimple>
                    </Card>
                    <Card>
                        <DummyCardSimple></DummyCardSimple>
                    </Card>
                    <Card>
                        <DummyCardSimple></DummyCardSimple>
                    </Card>
                </Col>
                <Col xl={9} md={9} mb>
                    <Card>
                        <DummyCardEx height='300px'></DummyCardEx>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={6} mb>
                    <Row>
                        <Col md={6} mb>
                            <Card>
                                <DummyCardEx height='200px'></DummyCardEx>
                            </Card>
                        </Col>
                        <Col md={6} mb>
                            <Card>
                                <DummyCardEx height='200px'></DummyCardEx>
                            </Card>
                        </Col>
                    </Row>
                    <Card>
                        <DummyCardEx height='234px'></DummyCardEx>
                    </Card>
                </Col>
                <Col md={6} mb>
                    <Card>
                        <DummyCardEx height='500px' />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Details;
