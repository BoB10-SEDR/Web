import { Row, Col } from '@Components/Grid';
import Card from '@Components/Card';
import CardBodyForm from '@Components/Card/Form';
import EventViewer from '@Components/EventViewer';
import Line from '@Components/Charts/Line';
import DummyCardEx from '@Dummy/DummyCardEx';
import d from '@Dummy/magician';

const red = '#F02632';
const blue = '#727CF5';
const pink = '#F66C6C';
const green = '#61CA68';

const Magician = () => {
    return (
        <div id='magician'>
            <Row>
                <Col xl={4} md={4} mb>
                    <Card>
                        <DummyCardEx height='500px'></DummyCardEx>
                    </Card>
                </Col>
                <Col xl={8} md={8} mb>
                    <Card>
                        <DummyCardEx height='390px'>
                            <Line />
                        </DummyCardEx>
                    </Card>
                    <Row>
                        <Col md={4} xl={4} mb>
                            <Card>
                                <CardBodyForm
                                    titleFontColor={red}
                                    title='전체 로그 수'
                                    content={d.totalLogs.toLocaleString()}
                                />
                            </Card>
                        </Col>
                        <Col md={4} xl={4} mb>
                            <Card>
                                <CardBodyForm
                                    titleFontColor={blue}
                                    title='장애 로그 수'
                                    content={d.disorderLogs.toLocaleString()}
                                />
                            </Card>
                        </Col>
                        <Col md={4} xl={4} mb>
                            <Card>
                                <CardBodyForm
                                    titleFontColor={green}
                                    title='연관 장치 수'
                                    content={d.devices.toLocaleString()}
                                />
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xl={12} md={12} mb>
                    <EventViewer />
                </Col>
            </Row>
        </div>
    );
};

export default Magician;
