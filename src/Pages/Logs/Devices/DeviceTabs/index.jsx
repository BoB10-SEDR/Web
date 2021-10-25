import '@Styles/deviceTabs.css';
import { observer } from 'mobx-react';
import { Tabs } from 'react-tabs';
import Details from '@Pages/Logs/Details';
import { Row, Col } from '@Components/Grid';
import DeviceNav from '@Components/DeviceNav';
import { CustomTabList, CustomTab, CustomTabPanel, TabContent } from '@Components/CustomTabs';
import TabPanelHeader from '@Components/UI/TabPanelHeader';
import tabItemDummy from '@Dummy/tabItemDummy';
import tabStore from '@Stores/deviceTabs';
import envStore from '@Stores/envInfo';

const DeviceTabs = () => {
    const handleSelect = index => {
        tabStore.setActiveTab(index);
    };

    return (
        <div id='deviceTabs' className='page'>
            <Row>
                <Col xl={1} md={1}>
                    <DeviceNav />
                </Col>
                <Col xl={11} md={11}>
                    <Tabs
                        className='tabs'
                        selectedIndex={tabStore.getActiveTab()}
                        selectedTabClassName='active'
                        onSelect={handleSelect}
                    >
                        <CustomTabList>
                            {tabStore.tabs.map((tab, index) => {
                                return (
                                    <CustomTab key={index} tabIndex={index}>
                                        <TabContent tabIndex={index} Icon={tab.Icon} title={tab.deviceName} />
                                    </CustomTab>
                                );
                            })}
                        </CustomTabList>
                        {tabStore.tabs.map((tab, index) => {
                            return (
                                <CustomTabPanel key={index}>
                                    <TabPanelHeader name={tab.deviceName} id={tab.deviceId} />
                                    <Details path={tab.path} />
                                </CustomTabPanel>
                            );
                        })}
                    </Tabs>
                </Col>
            </Row>
        </div>
    );
};

export default observer(DeviceTabs);
