import { Row, Col } from '@Components/Grid';

import PageHeading from '@Components/UI/PageHeading';
import Card from '@Components/Card';
import DeviceInfo from '@Components/DeviceInfo';
import DeviceNav from '@Components/DeviceNav';
import BarDummy from '@Dummy/barChartDummy';
import PieDummy from '@Dummy/pieChartDummy';
import DummyCardSimple from '@Dummy/DummyCardSimple';
import DummyCardEx from '@Dummy/DummyCardEx';

const Devices = () => {
    const { barId, barData, barOptions } = BarDummy;
    const { pieId, pieData, pieOptions } = PieDummy;

    return (
        <div id='detected' className='page'>
            <PageHeading title='Devices' />
            <Row>
                <Col md={3} mb>
                    <Card>
                        <DummyCardSimple></DummyCardSimple>
                    </Card>
                    <Card>
                        <DummyCardSimple></DummyCardSimple>
                    </Card>
                    <Card title='공격 유형별 로그 현황'>
                        <DummyCardEx height='215px'></DummyCardEx>
                    </Card>
                </Col>
                <Col md={9} mb>
                    <DummyCardEx height='500px'>
                        <DeviceNav />
                    </DummyCardEx>
                </Col>
            </Row>
            <DeviceInfo />
        </div>
    );
};

export default Devices;
