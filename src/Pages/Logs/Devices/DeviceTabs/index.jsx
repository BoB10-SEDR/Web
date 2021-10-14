import { useState } from 'react';
import { Row, Col } from '@Components/Grid';
import Card from '@Components/Card';
import DeviceNav from '@Components/DeviceNav';
import Details from '@Pages/Logs/Details';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AiFillRedditCircle, AiFillTwitterCircle } from 'react-icons/ai';
import { BiCircle } from 'react-icons/bi';
import { IoIosClose } from 'react-icons/io';
import store from '@Stores/deviceDetail';

const DeviceTabs = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div id='deviceTabs' className='page'>
            <Row>
                <Col xl={1} md={1}>
                    <DeviceNav />
                </Col>
                <Col xl={11} md={11}>
                    <Tabs
                        className='tabs'
                        selected={tabIndex}
                        selectedTabClassName='active'
                        onSelect={index => setTabIndex(index)}
                    >
                        <TabList className='tabList'>
                            <Tab className='tab'>
                                <TabContent Icon={AiFillRedditCircle} title={'dummy1'} />
                            </Tab>
                            <Tab className='tab'>
                                <TabContent Icon={AiFillTwitterCircle} title={'dummy2'} />
                            </Tab>
                        </TabList>
                        <TabPanel>
                            <Card>
                                <Details title='dummy1' />
                            </Card>
                        </TabPanel>
                        <TabPanel>
                            <Card>
                                <Details title='dummy2' />
                            </Card>
                        </TabPanel>
                    </Tabs>
                </Col>
            </Row>
        </div>
    );
};

const TabContent = props => {
    const { Icon = BiCircle, title = 'dummy' } = props;

    return (
        <>
            <div className='icon'>
                <Icon size='25' />
            </div>
            <div className='title'>{title}</div>
            <div className='cancelButton'>
                <IoIosClose size='25' />
            </div>
        </>
    );
};

export default DeviceTabs;
