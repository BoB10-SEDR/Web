import { Row, Col } from '@Components/Grid';
import Card from '@Components/Card';
import MagicianEventViewer from '@Components/MagicianEventViewer';
import TimeLine from '@Components/Charts/TimeLine';
<<<<<<< HEAD:src/Pages/Resources/Monitoring/index.jsx
import LogMagician from '@Components/LogMagician';
=======
>>>>>>> Add/api:src/Pages/Monitoring/index.jsx
import MagicianStats from '@Components/MagicianStats';
import DummyCardEx from '@Dummy/DummyCardEx';

const Monitoring = () => {
    return (
        <div id='magician' className='page'>
            <Row>
<<<<<<< HEAD:src/Pages/Resources/Monitoring/index.jsx
                <Col xl={4} md={4} mb>
                    <Card title='로그파일 선택'>
                        <DummyCardEx noRelative height='500px'>
                            <LogMagician />
                        </DummyCardEx>
                    </Card>
                </Col>
                <Col xl={8} md={8} mb>
=======
                <Col>
>>>>>>> Add/api:src/Pages/Monitoring/index.jsx
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
