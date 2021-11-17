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
import d from '@Dummy/devicesNumbers';
import List from '@Components/List';

const Devices = () => {
    return (
        <div id='devices' className='page'>
            <SideTabs />
            <Row>
                <Col md={3} mb>
                    <Card border='1px solid red'>
                        <CardBodyForm titleFontColor='red' title='전체 로그 개수' content={`${d.totalLogs}개`} />
                        <UpDown isDecreasing amount={d.changeNumber.toLocaleString()} />
                    </Card>
                    <Card border='1px solid red'>
                        <CardBodyForm titleFontColor='red' title='전체 공격 로그 비율' content='15%' />
                        <UpDown isRate amount={`${d.changeRate}%`} />
                    </Card>
                    <List title='공격 유형별 로그 현황' itemType='more' content={d.attackList} />
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
