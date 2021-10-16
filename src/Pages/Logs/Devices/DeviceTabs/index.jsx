import { useState } from 'react';
import { observer } from 'mobx-react';
import { Row, Col } from '@Components/Grid';
import DeviceNav from '@Components/DeviceNav';
import { CustomTab, CustomTabPanel } from '@Components/CustomTabs';
import { Tabs, TabList } from 'react-tabs';
import tabItemDummy from '@Dummy/tabItemDummy';
import store from '@Stores/deviceDetail';

const DeviceTabs = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div id='deviceTabs' className='page'>
            <Row>
                <Col xl={1} md={1}>
                    <DeviceNav items={tabItemDummy} />
                </Col>
                <Col xl={11} md={11}>
                    <Tabs
                        className='tabs'
                        selected={tabIndex}
                        selectedTabClassName='active'
                        onSelect={index => setTabIndex(index)}
                    >
                        <TabList className='tabList'>
                            {store.tabs.map((tab, index) => (
                                <CustomTab key={index} tabIndex={index} {...tab} />
                            ))}
                        </TabList>
                        {store.tabs.map((tab, index) => (
                            <CustomTabPanel key={index} title={tab.title} />
                        ))}
                    </Tabs>
                </Col>
            </Row>
        </div>
    );
};

export default observer(DeviceTabs);
