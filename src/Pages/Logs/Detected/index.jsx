import { Row, Col } from '@Components/Grid';
import Card from '@Components/Card';
import Bar from '@Components/Charts/Bar';
import Pie from '@Components/Charts/Pie';

import BarDummy from '@Dummy/barChartDummy';
import PieDummy from '@Dummy/pieChartDummy';

const Detected = () => {
    const { barId, barData, barOptions } = BarDummy;
    const { pieId, pieData, pieOptions } = PieDummy;

    return (
        <div id='detected' className='page'>
            <Row>
                <Col>
                    <Card title='바 차트'>
                        <Bar barID={1} data={barData} options={barOptions} />
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <Card title='바 차트'>
                        <Bar barID={1} data={barData} options={barOptions} />
                    </Card>
                </Col>
                <Col md={4}>
                    <Card title='파이 차트'>
                        <Pie pidID={1} data={pieData} options={pieOptions} />
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card title='대응정책들'></Card>
                </Col>
                <Col>
                    <Card title='장치 이벤트 뷰어'></Card>
                </Col>
            </Row>
        </div>
    );
};

export default Detected;
