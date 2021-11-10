import { Row, Col } from '@Components/Grid';
import Card from '@Components/Card';
import CardBodyForm from '@Components/Card/Form';
import EventViewer from '@Components/EventViewer';
import DummyCardEx from '@Dummy/DummyCardEx';

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
                        <DummyCardEx height='390px'></DummyCardEx>
                    </Card>
                    <Row>
                        <Col md={4} xl={4} mb>
                            <Card>
                                <CardBodyForm titleFontColor={'red'} title='보안위험지수' content='1단계' />
                            </Card>
                        </Col>
                        <Col md={4} xl={4} mb>
                            <Card>
                                <CardBodyForm titleFontColor={'red'} title='보안위험지수' content='1단계' />
                            </Card>
                        </Col>
                        <Col md={4} xl={4} mb>
                            <Card>
                                <CardBodyForm titleFontColor={'red'} title='보안위험지수' content='1단계' />
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
