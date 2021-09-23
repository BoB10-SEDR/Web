import Row from '@Components/Grid/Row';
import Col from '@Components/Grid/Col';
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
        </div>
    );
};

export default Dashboard;
