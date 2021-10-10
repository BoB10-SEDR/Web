import { Row, Col } from '@Components/Grid';
import Card from '@Components/Card';
import Bar from '@Components/Charts/Bar';
import Pie from '@Components/Charts/Pie';
import BarDummy from '@Dummy/barChartDummy';
import PieDummy from '@Dummy/pieChartDummy';
import '@Styles/dashboard.css';
import PageHeading from '@Components/UI/PageHeading';
import DummyCardSimple from '@Dummy/DummyCardSimple';
import Slider from '@Components/Slider';
import CardBodyForm from '../../Components/Card/Form';

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
                <Col xl={8} lg={7}>
                    <Card title='시간별 전체 로그 수'>
                        <Slider />
                    </Card>
                </Col>

                <Col xl={4} lg={5}>
                    <Card title='장비별 로그비율'>
                        <Pie id={pieId} data={pieData} options={pieOptions} />
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <Card title='대응정책 적용/해제'>
                        <Bar id={barId} isHorizontal={true} data={barData} options={barOptions} />
                        <Bar id={barId} isHorizontal={true} data={barData} options={barOptions} />
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card title='공격 유형별 로그 개수'>
                        <Bar id={barId} isHorizontal={true} data={barData} options={barOptions} />
                    </Card>
                    <Card title='공격 유형별 로그 비율?'>
                        <Bar id={barId} isHorizontal={true} data={barData} options={barOptions} />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
