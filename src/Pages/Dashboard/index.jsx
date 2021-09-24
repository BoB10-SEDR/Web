import { Row, Col } from '@Components/Grid';
import Card from '@Components/Card';
import Bar from '@Components/Charts/Bar';
import Pie from '@Components/Charts/Pie';
import BarDummy from '@Dummy/barChartDummy';
import PieDummy from '@Dummy/pieChartDummy';

const Dashboard = () => {
    const { barId, barData, barOptions } = BarDummy;
    const { pieId, pieData, pieOptions } = PieDummy;

    return (
        <div id='dashboard'>
            <Row>
                <Col md={8}>
                    <Card title='바 차트'>
                        <Bar id={barId} data={barData} options={barOptions} />
                    </Card>
                </Col>
                <Col md={4}>
                    <Card title='파이 차트'>
                        <Pie id={pieId} data={pieData} options={pieOptions} />
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <Card title='수평 바 차트'>
                        <Bar id={barId} isHorizontal={true} data={barData} options={barOptions} />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
