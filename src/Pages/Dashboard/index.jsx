import { Row, Col } from '@Components/Grid';
import Card from '@Components/Card';
import Bar from '@Components/Charts/Bar';
import Pie from '@Components/Charts/Pie';
import Table from '@Components/Table';
import DummyCardEx from '@Dummy/DummyCardEx';
import BarDummy from '@Dummy/barChartDummy';
import PieDummy from '@Dummy/pieChartDummy';
import { dummyColumns, dummyData } from '@Dummy/solutionTableDummy';
import '@Styles/dashboard.css';
import PageHeading from '@Components/UI/PageHeading';
import DummyCardSimple from '@Dummy/DummyCardSimple';
import Slider from '@Components/Slider';
import CardBodyForm from '@Components/Card/Form';
import Line from '@Components/Charts/Line';
import Radar from '@Components/Charts/Radar';
import { DummyImgFrame } from '@Dummy/DummyImgs';
import SparkLines from '@Components/Charts/Sparklines';

const Dashboard = () => {
    const { barId, barData, barOptions } = BarDummy;
    const { pieId, pieData, pieOptions } = PieDummy;

    const red = '#F02632';
    const blue = '#727CF5';
    const pink = '#F66C6C';
    const green = '#61CA68';

    const cardDefaultConfig = {
        borderRadius: '18px',
        padding: '25px 20px',
    };

    return (
        <div id='dashboard'>
            <Row>
                <Col xl={3} md={6}>
                    <Card border={`1px solid ${red}`} {...cardDefaultConfig}>
                        <CardBodyForm titleFontColor={red} title='보안위험지수' content='1단계' />
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card border={`1px solid ${blue}`} {...cardDefaultConfig}>
                        <CardBodyForm titleFontColor={blue} title='전체 로그 개수' content='19,991,006 개' />
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card border={`1px solid ${pink}`} {...cardDefaultConfig}>
                        <CardBodyForm titleFontColor={pink} title='공격유형/공격로그개수' content='3/10,928 개' />
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card border={`1px solid ${green}`} {...cardDefaultConfig}>
                        <CardBodyForm titleFontColor={green} title='등록된 장치/센서 수' content='30/256 개' />
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <Card title='시간별 전체 로그 수'>
                        <DummyCardEx height='277px'>
                            {/* <Slider /> */}
                            <Line />
                        </DummyCardEx>
                    </Card>
                </Col>

                <Col lg={3}>
                    <Card title='공격 유형별 로그비율'>
                        <DummyCardEx height='277px'>
                            <Radar />
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
                    <Card title='공격 유형별 로그 개수'>
                        {/* <DummyImgFrame link='https://cdn.discordapp.com/attachments/903242363500122137/903242392143024159/unknown.png' /> */}

                        <SparkLines />
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card title='대응정책 적용/해제'>
                        <DummyCardEx height='314px'>
                            <Table columns={dummyColumns} data={dummyData} />
                        </DummyCardEx>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <Card title='장비 정보 테이블'>
                        <Bar id={barId} isHorizontal={true} data={barData} options={barOptions} />
                        <Bar id={barId} isHorizontal={true} data={barData} options={barOptions} />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
