import '@Styles/devices.css';
import { Row, Col } from '@Components/Grid';
import Card from '@Components/Card';
import DeviceNav from '@Components/DeviceNav';
import CardBodyForm from '@Components/Card/Form';
import UpDown from '@Components/UI/UpDown';
import DeviceTable from '@Components/DeviceTable';
import SideTabs from '@Components/SideTabs';
import EnvInfo from '@Components/EnvInfo';

import DummyCardEx from '@Dummy/DummyCardEx';

const Devices = () => {
    const changeNumber = 1339523;
    const changeRate = 4;

    return (
        <div id='devices' className='page'>
            <SideTabs />
            <Row>
                <Col md={3} mb>
                    <Card border='1px solid red'>
                        <CardBodyForm titleFontColor='red' title='전체 로그 개수' content='19,991,006개' />
                        <UpDown isDecreasing amount={changeNumber.toLocaleString()} />
                    </Card>
                    <Card border='1px solid red'>
                        <CardBodyForm titleFontColor='red' title='전체 공격 로그 비율' content='15%' />
                        <UpDown isRate amount={`${changeRate}%`} />
                    </Card>
                    <Card title='공격 유형별 로그 현황'>
                        <DummyCardEx height='215px'></DummyCardEx>
                    </Card>
                </Col>
                <Col md={9} mb>
                    <EnvInfo />
                </Col>
            </Row>
            <DeviceTable />
        </div>
    );
};

export default Devices;
