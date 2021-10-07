import '@Styles/devices.css';

import { useState } from 'react';
import { Row, Col } from '@Components/Grid';
import Card from '@Components/Card';
import Table from '@Components/Table';
import DeviceNav from '@Components/DeviceNav';
import FilterButton from '@Components/FilterButton';
import SearchBar from '@Components/SearchBar';
import DeviceTable from '@Components/DeviceTable';

import BarDummy from '@Dummy/barChartDummy';
import PieDummy from '@Dummy/pieChartDummy';
import DummyCardSimple from '@Dummy/DummyCardSimple';
import DummyCardEx from '@Dummy/DummyCardEx';
import { dummyColumns, dummyData } from '@Dummy/deviceTableDummy';

const Devices = () => {
    const { barId, barData, barOptions } = BarDummy;
    const { pieId, pieData, pieOptions } = PieDummy;

    return (
        <div id='detected' className='page'>
            <Row>
                <Col md={3} mb>
                    <Card border='1px solid red'>
                        <DummyCardSimple></DummyCardSimple>
                    </Card>
                    <Card border='1px solid red'>
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
            <DeviceTable />
        </div>
    );
};

export default Devices;
