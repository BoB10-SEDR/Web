import { Row, Col } from '@Components/Grid';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import Card from '@Components/Card';
import Pie from '@Components/Charts/Pie';
import DeviceTable from '@Components/DeviceTable';
import useSWR from 'swr';
import DummyCardEx from '@Dummy/DummyCardEx';
import PieDummy from '@Dummy/pieChartDummy';
import '@Styles/dashboard.css';
import CardBodyForm from '@Components/Card/Form';
import SparkLines from '@Components/Charts/Sparklines';
import TimeLine from '@Components/Charts/TimeLine';
import ThreatRadar from '@Components/Charts/ThreatRadar';
import SolutionsTable from '@Components/SolutionsTable';
import d from '@Dummy/dashboardNumbers';
import dummySolutions from '@Dummy/solutions';
import { fetcher } from '@Hooks/';
import { format } from 'date-fns';
import store from '@Stores/dashboard';

const Dashboard = () => {
    const [page, limit] = [1, 10];
    const [start, setStart] = useState(format(Date.now(), 'yyyy-MM-dd'));
    const [time, setTime] = useState(5);
    const { data: statData = [], isValidating } = useSWR(`/dashboard/statistics?time=${time}`, url => fetcher(url));

    const { pieId, pieData, pieOptions } = PieDummy;

    const red = '#F02632';
    const blue = '#727CF5';
    const pink = '#F66C6C';
    const green = '#61CA68';

    const cardDefaultConfig = {
        borderRadius: '18px',
        padding: '25px 20px',
    };

    const { totalLogs = 0, threatType = 0, threatLogs = 0, devices = 0, modules = 0 } = store;

    const setTotal = data => {
        let totalCount = 0;
        data.map(item => {
            const count = item.count ?? 0;
            totalCount += count;
        });
        store.setTotalLogs(totalCount);
    };

    const setThreat = data => {
        const { type, total_attack } = data[0] ?? 0;
        store.setThreatType(type);
        store.setThreatLogs(total_attack);
    };

    const setDevice = data => {
        const devices = data[0].devices ?? 0;
        store.setDevices(devices);
    };

    const setModule = data => {
        const modules = data[0].devices ?? 0;
        store.setModules(modules);
    };

    useEffect(() => {
        statData.map(item => {
            const { description, data } = item;
            switch (description) {
                case 'total':
                    setTotal(data);
                    break;
                case 'threat':
                    setThreat(data);
                    break;
                case 'device':
                    setDevice(data);
                    break;
                case 'module':
                    setModule(data);
                    break;
                default:
                    break;
            }
        });
    }, [isValidating]);

    return (
        <div id='dashboard'>
            <Row>
                <Col xl={3} md={6}>
                    <Card border={`1px solid ${red}`} {...cardDefaultConfig}>
                        <CardBodyForm titleFontColor={red} title='??????????????????' content={`${d.riskStep}??????`} />
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card border={`1px solid ${blue}`} {...cardDefaultConfig}>
                        <CardBodyForm titleFontColor={blue} title='?????? ?????? ??????' content={`${totalLogs} ???`} />
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card border={`1px solid ${pink}`} {...cardDefaultConfig}>
                        <CardBodyForm
                            titleFontColor={pink}
                            title='?????? ???????????? ?????? ??????/??????'
                            content={`${threatType}/${threatLogs ?? 0} ???`}
                        />
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card border={`1px solid ${green}`} {...cardDefaultConfig}>
                        <CardBodyForm
                            titleFontColor={green}
                            title='????????? ??????/?????? ???'
                            content={`${devices}/${modules} ???`}
                        />
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <Card title='????????? ?????? ?????? ???'>
                        <DummyCardEx height='300px'>
                            <TimeLine />
                        </DummyCardEx>
                    </Card>
                </Col>

                <Col lg={3}>
                    <Card title='???????????? ????????? ????????????'>
                        <DummyCardEx height='300px'>
                            <ThreatRadar />
                        </DummyCardEx>
                    </Card>
                </Col>

                <Col lg={3}>
                    <Card title='????????? ????????????'>
                        <DummyCardEx height='300px'>
                            <Pie id={pieId} data={pieData} options={pieOptions} />
                        </DummyCardEx>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <Card title='??????????????? ?????? ?????? ??????'>
                        {/* <DummyImgFrame link='https://cdn.discordapp.com/attachments/903242363500122137/903242392143024159/unknown.png' /> */}

                        <DummyCardEx height='314px'>
                            <SparkLines />
                        </DummyCardEx>
                    </Card>
                </Col>
                <Col lg={6}>
                    <SolutionsTable />
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <DeviceTable />
                </Col>
            </Row>
        </div>
    );
};

export default observer(Dashboard);
