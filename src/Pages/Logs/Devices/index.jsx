import '@Styles/devices.css';

import { useState } from 'react';
import { Row, Col } from '@Components/Grid';
import Card from '@Components/Card';
import Table from '@Components/Table';
import DeviceNav from '@Components/DeviceNav';
import FilterButton from '@Components/FilterButton';
import SearchBar from '@Components/SearchBar';

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
            <DeviceInfo />
        </div>
    );
};

const DeviceInfo = () => {
    return (
        <div id='deviceInfo'>
            <DeviceTable />
        </div>
    );
};

const DeviceTable = () => {
    const [columns, totalData] = [dummyColumns, dummyData];
    const [filteredData, setFilteredData] = useState(totalData);

    const handleSearch = input => {
        const filtered = totalData.filter(device => {
            return Object.keys(device).some(key => {
                return device[key].toLowerCase().includes(input.toLowerCase());
            });
        });
        setFilteredData(filtered);
    };

    return (
        <div id='deviceTable'>
            <div className='tableUtils'>
                <FilterButton />
                <SearchBar onClick={handleSearch} />
            </div>
            <Card>
                <div className='tableContent'>
                    <DummyCardEx height='500px'>
                        <Table columns={columns} data={filteredData} />
                    </DummyCardEx>
                </div>
            </Card>
        </div>
    );
};

export default Devices;
