import { Row, Col } from '@Components/Grid';
import Card from '@Components/Card';
import MagicianEventViewer from '@Components/MagicianEventViewer';
import TimeLine from '@Components/Charts/TimeLine';
import FileSelector from '@Components/FileSelector';
import MagicianStats from '@Components/MagicianStats';
import DummyCardEx from '@Dummy/DummyCardEx';

const Magician = () => {
    return (
        <div id='magician'>
            <Row>
                <Col xl={4} md={4} mb>
                    <Card title='로그파일 선택'>
                        <DummyCardEx height='500px'>
                            <FileSelector />
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

export default Magician;
