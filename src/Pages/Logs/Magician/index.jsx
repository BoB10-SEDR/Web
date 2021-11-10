import { Row, Col } from '@Components/Grid';
import Card from '@Components/Card';

const Magician = () => {
    return (
        <div id='magician'>
            <Row>
                <Col xl={4} md={4} mb>
                    <Card></Card>
                </Col>
            </Row>
        </div>
    );
};

export default Magician;
