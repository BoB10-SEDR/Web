import { useEffect } from 'react';
import { Row, Col } from '@Components/Grid';

import PageHeading from '@Components/UI/PageHeading';
import Card from '@Components/Card';
import CardBodyForm from '@Components/Card/Form';
import EventViewer from '@Components/EventViewer';
import ModuleInfo from '@Components/ModuleInfo';
import UpDown from '@Components/UI/UpDown';
import Table from '@Components/Table';
import DeviceNav from '@Components/DeviceNav';
import Pie from '@Components/Charts/Pie';
import Gauge from '@Components/Charts/Gauge';

import PieDummy from '@Dummy/pieChartDummy';
import DummyCardSimple from '@Dummy/DummyCardSimple';
import DummyCardEx from '@Dummy/DummyCardEx';
import { dummyColumns, dummyData } from '@Dummy/solutionTableDummy';
import d from '@Dummy/dummyDetails';

const Networks = () => {
    const { pieId, pieData, pieOptions } = PieDummy;

    return (
        <div id='networks' className='page'>
            <Row>
                <Col xl={1} md={1}>
                    <DeviceNav />
                </Col>
                <Col xl={11} md={11}>
                    <Card>
                        <Row>
                            <Col xl={3} md={3} mb>
                                <Card border='1px solid red'>
                                    <CardBodyForm titleFontColor='red' title='전체 로그 개수' content='19,991,006개' />
                                    <UpDown isDecreasing={true} amount={d.totalLogs.toLocaleString()} />
                                </Card>
                                <Card border='1px solid red'>
                                    <CardBodyForm
                                        titleFontColor='red'
                                        title='공격 유형 / 공격 로그 개수'
                                        content='19,991,006개'
                                    />
                                    <UpDown
                                        isDecreasing={true}
                                        amount={`${d.attacks} / ${d.totalLogs.toLocaleString()}`}
                                    />
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
                                <Card title='공격 유형별 로그 개수'>
                                    <DummyCardEx height='277px'>
                                        <Gauge />
                                    </DummyCardEx>
                                </Card>
                            </Col>
                            <Col md={3} mb>
                                <Card title='공격 유형별 로그 비율'>
                                    <Pie id={pieId} data={pieData} options={pieOptions} />
                                </Card>
                            </Col>
                            <Col md={6} mb>
                                <Card title='적용된 대응 정책 리스트'>
                                    <DummyCardEx height='277px'>
                                        <Table columns={dummyColumns} data={dummyData} />
                                    </DummyCardEx>
                                </Card>
                            </Col>
                            <Col md={12} mb>
                                <EventViewer />
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Networks;
