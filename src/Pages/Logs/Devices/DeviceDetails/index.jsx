import '@Styles/deviceTabs.css';
import { Row, Col } from '@Components/Grid';
import DeviceNav from '@Components/DeviceNav';
import DeviceTabs from './DeviceTabs';

const DeviceDetails = () => {
    return (
        <div id='deviceTabs' className='page'>
            <Row>
                <Col xl={1} md={1}>
                    <DeviceNav />
                </Col>
                <Col xl={11} md={11}>
                    <DeviceTabs />
                </Col>
            </Row>
        </div>
    );
};

export default DeviceDetails;
