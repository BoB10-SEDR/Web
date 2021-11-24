import { Row, Col } from '@Components/Grid';
import { useEffect } from 'react';
import Card from '@Components/Card';
import Pie from '@Components/Charts/Pie';
import Table from '@Components/Table';
import DeviceTable from '@Components/DeviceTable';
import useSWR from 'swr';
import DummyCardEx from '@Dummy/DummyCardEx';
import PieDummy from '@Dummy/pieChartDummy';
import '@Styles/dashboard.css';
import CardBodyForm from '@Components/Card/Form';
import Radar from '@Components/Charts/Radar';
import SparkLines from '@Components/Charts/Sparklines';
import TimeLine from '@Components/Charts/TimeLine';
import ThreatRadar from '@Components/Charts/ThreatRadar';
import d from '@Dummy/dashboardNumbers';
import dummySolutions from '@Dummy/solutions';
import { fetcher } from '@Hooks/';
import { attachToggle } from '@Functions/';

const Dashboard = () => {
    const [page, limit] = [1, 10];
    let {
        data: solutionsData = dummySolutions,
        isValidating,
        error,
    } = useSWR(`policies?page=${page}&limit=${limit}`, url => fetcher(url));
    const [start, time] = ['2020-01-01', 14400];
    const requestConfig = { params: { start: start, time: time } };
    const { data: statData, error: fetchStatDataError } = useSWR(
        `dashboard/statistics?start=${start}&time=${time}`,
        url => fetcher(url, requestConfig)
    );

    const { pieId, pieData, pieOptions } = PieDummy;

    const red = '#F02632';
    const blue = '#727CF5';
    const pink = '#F66C6C';
    const green = '#61CA68';

    const cardDefaultConfig = {
        borderRadius: '18px',
        padding: '25px 20px',
    };

    const { total, attack_type, attack, device, module } = statData ? statData[0] : d;

    const solutions = attachToggle(solutionsData, 'idx');

    return (
        <div id='dashboard'>
            <Row>
                <Col xl={3} md={6}>
                    <Card border={`1px solid ${red}`} {...cardDefaultConfig}>
                        <CardBodyForm titleFontColor={red} title='보안위험지수' content={`${d.riskStep}단계`} />
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card border={`1px solid ${blue}`} {...cardDefaultConfig}>
                        <CardBodyForm titleFontColor={blue} title='전체 로그 개수' content={`${total} 개`} />
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card border={`1px solid ${pink}`} {...cardDefaultConfig}>
                        <CardBodyForm
                            titleFontColor={pink}
                            title='탐지 보안항목 로그 유형/개수'
                            content={`${attack_type}/${attack} 개`}
                        />
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card border={`1px solid ${green}`} {...cardDefaultConfig}>
                        <CardBodyForm
                            titleFontColor={green}
                            title='등록된 장치/센서 수'
                            content={`${device}/${module} 개`}
                        />
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <Card title='시간별 전체 로그 수'>
                        <DummyCardEx height='277px'>
                            <TimeLine />
                        </DummyCardEx>
                    </Card>
                </Col>

                <Col lg={3}>
                    <Card title='보안항목 유형별 로그비율'>
                        <DummyCardEx height='277px'>
                            <ThreatRadar />
                        </DummyCardEx>
                    </Card>
                </Col>

                <Col lg={3}>
                    <Card title='구성별 로그비율'>
                        <Pie id={pieId} data={pieData} options={pieOptions} />
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <Card title='보안항목별 탐지 로그 개수'>
                        {/* <DummyImgFrame link='https://cdn.discordapp.com/attachments/903242363500122137/903242392143024159/unknown.png' /> */}

                        <DummyCardEx height='314px'>
                            <SparkLines />
                        </DummyCardEx>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card title='대응정책 적용/해제'>
                        <DummyCardEx height='314px'>
                            <Table schema='simpleSolutions' browseData={solutions} />
                        </DummyCardEx>
                    </Card>
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

export default Dashboard;
