import '@Styles/devices.css';
import { Row, Col } from '@Components/Grid';

import Card from '@Components/Card';
import BarDummy from '@Dummy/barChartDummy';
import PieDummy from '@Dummy/pieChartDummy';

const Devices = () => {
    const { barId, barData, barOptions } = BarDummy;
    const { pieId, pieData, pieOptions } = PieDummy;

    return (
        <div id='detected' className='logDetail'>
            <Row>
                <Col xl={3} md={6} mb>
                    <Row>{/* <Card children={}></Card> */}</Row>
                    <Row>
                        <Card></Card>
                    </Row>
                    <Row>
                        <Card></Card>
                    </Row>
                </Col>
                <Col xl={9} md={6} mb>
                    <Card></Card>
                </Col>
            </Row>
        </div>
    );
};

export default Devices;
