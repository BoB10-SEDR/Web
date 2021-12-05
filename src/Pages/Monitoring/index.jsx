import { Row, Col } from '@Components/Grid';
import Card from '@Components/Card';
import MagicianEventViewer from '@Components/MagicianEventViewer';
import TimeLine from '@Components/Charts/TimeLine';
import MagicianStats from '@Components/MagicianStats';
import DummyCardEx from '@Dummy/DummyCardEx';

const Monitoring = () => {
    return (
        <div id='magician' className='page'>
            <Row>
                <Col>
                    <Card title='로그 실시간 트래픽'>
                        <DummyCardEx height='390px'>
                            <TimeLine />
                        </DummyCardEx>
                    </Card>
                    <Row>
                        <MagicianStats />
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <MagicianEventViewer />
                </Col>
            </Row>
        </div>
    );
};

export default Monitoring;
