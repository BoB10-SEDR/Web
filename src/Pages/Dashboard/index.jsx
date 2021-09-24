import { Row, Col } from '@Components/Grid';
import Card from '@Components/Card';
import Bar from '@Components/Charts/Bar';
import Pie from '@Components/Charts/Pie';
import ToggleSwitch from '@Components/UI/ToggleSwitch';
import BarDummy from '@Dummy/barChartDummy';
import PieDummy from '@Dummy/pieChartDummy';
import '@Styles/dashboard.css';
import PageHeading from '@Components/UI/PageHeading';
import DummyCardSimple from '@Dummy/DummyCardSimple';

const Dashboard = () => {
    const { barId, barData, barOptions } = BarDummy;
    const { pieId, pieData, pieOptions } = PieDummy;

    return (
        <div id='dashboard'>
            <PageHeading title='Dashboard' />

            <Row>
                <Col xl={3} md={6}>
                    <Card>
                        {/* 보안레벨 관련 Content가 들어가야 합니다. */}
                        <DummyCardSimple />
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card>
                        {/* 24시간 내 전체 Traffic관련 Content가 들어가야 합니다. */}
                        <DummyCardSimple />
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card>
                        {/* 24시간 내 공격/공격로그수 관련 Content가 들어가야 합니다. */}
                        <DummyCardSimple />
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card>
                        {/* 등록된 장치/센서수 관련 Content가 들어가야 합니다. */}
                        <DummyCardSimple />
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md={8}>
                    <Card title='시간별 전체 로그 수'>
                        <Bar id={barId} data={barData} options={barOptions} />
                        <ToggleSwitch id={1} onToggle={null} />
                    </Card>
                </Col>
                <Col md={4}>
                    <Card title='장비별 로그비율'>
                        <Pie id={pieId} data={pieData} options={pieOptions} />
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Card title='공격 유형별 로그 개수'>
                        <Bar id={barId} isHorizontal={true} data={barData} options={barOptions} />
                    </Card>
                    <Card title='공격 유형별 로그 비율?'>
                        <Bar id={barId} isHorizontal={true} data={barData} options={barOptions} />
                    </Card>
                </Col>

                <Col md={6}>
                    <Card title='대응정책 적용/해제'>
                        <Bar id={barId} isHorizontal={true} data={barData} options={barOptions} />
                        <Bar id={barId} isHorizontal={true} data={barData} options={barOptions} />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
