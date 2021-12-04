import { Row, Col } from '@Components/Grid';
import Card from '@Components/Card';
import MagicianEventViewer from '@Components/MagicianEventViewer';
import TimeLine from '@Components/Charts/TimeLine';
import LogMagician from '@Components/LogMagician';
import MagicianStats from '@Components/MagicianStats';
import DummyCardEx from '@Dummy/DummyCardEx';

const Monitoring = () => {
    return (
        <div id='magician' className='page'>
            <Row>
                <Col xl={4} md={4} mb>
                    <Card title='로그파일 선택'>
                        <DummyCardEx noRelative height='500px'>
                            <LogMagician />
                        </DummyCardEx>
                    </Card>
                </Col>
                <Col xl={8} md={8} mb>
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
                <Col xl={12} md={12} mb>
                    <MagicianEventViewer />
                </Col>
            </Row>
        </div>
    );
};

export default Monitoring;