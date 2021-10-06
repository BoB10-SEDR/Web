import '@Styles/devices.css';

import { Row, Col } from '@Components/Grid';
import Card from '@Components/Card';
import Table from '@Components/Table';
import DeviceNav from '@Components/DeviceNav';
import FilterButton from '@Components/FilterButton';
import SearchBar from '@Components/SearchBar';
import CardBodyForm from '@Components/Card/Form';
import UpDown from '@Components/UI/UpDown';

import BarDummy from '@Dummy/barChartDummy';
import PieDummy from '@Dummy/pieChartDummy';
import DummyCardSimple from '@Dummy/DummyCardSimple';
import DummyCardEx from '@Dummy/DummyCardEx';

const Devices = () => {
    const { barId, barData, barOptions } = BarDummy;
    const { pieId, pieData, pieOptions } = PieDummy;

    const changeNumber = 1339523;
    const changeRate = '4%';

    return (
        <div id='detected' className='page'>
            <Row>
                <Col md={3} mb>
                    <Card border='1px solid red'>
                        <CardBodyForm titleFontColor='red' title='전체 로그 개수' content='19,991,006개' />
                        <UpDown isDecreasing={true} amount={changeNumber.toLocaleString()} />
                    </Card>
                    <Card border='1px solid red'>
                        <CardBodyForm titleFontColor='red' title='전체 대비 공격 로그 비율' content='15%' />
                        <UpDown amount={changeRate} />
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

const DeviceInfo = () => {
    return (
        <div id='deviceInfo'>
            <TableUtils />
            <DeviceTable />
        </div>
    );
};

const DeviceTable = () => {
    return (
        <div id='deviceTable'>
            <Card>
                <div className='tableContent'>
                    <DummyCardEx height='500px'>
                        <Table />
                    </DummyCardEx>
                </div>
            </Card>
        </div>
    );
};

const TableUtils = () => {
    return (
        <div id='tableUtils'>
            <FilterButton />
            <SearchBar />
        </div>
    );
};

export default Devices;
