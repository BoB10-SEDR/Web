import '@Styles/deviceTabs.css';
import { observer } from 'mobx-react';
import { Tabs } from 'react-tabs';
import { useHistory } from 'react-router-dom';
import Details from '@Pages/Logs/Details';
import { Row, Col } from '@Components/Grid';
import DeviceNav from '@Components/DeviceNav';
import { CustomTabList, CustomTab, CustomTabPanel, TabContent } from '@Components/CustomTabs';
import TabPanelHeader from '@Components/UI/TabPanelHeader';
import tabItemDummy from '@Dummy/tabItemDummy';
import store from '@Stores/deviceTabs';

const DeviceTabs = () => {
    const history = useHistory();

    const handleSelect = index => {
        store.setActiveTab(index);
    };

    const handleArrowClick = () => {
        history.push('/Logs/Devices');
    };

    return (
        <div id='deviceTabs' className='page'>
            <Row>
                <Col xl={1} md={1}>
                    <DeviceNav items={tabItemDummy} onArrowClick={handleArrowClick} />
                </Col>
                <Col xl={11} md={11}>
                    <Tabs
                        className='tabs'
                        selectedIndex={store.getActiveTab()}
                        selectedTabClassName='active'
                        onSelect={handleSelect}
                    >
                        <CustomTabList>
                            {store.tabs.map((tab, index) => {
                                return (
                                    <CustomTab key={index} tabIndex={index}>
                                        <TabContent tabIndex={index} Icon={tab.Icon} title={tab.deviceName} />
                                    </CustomTab>
                                );
                            })}
                        </CustomTabList>
                        {store.tabs.map((tab, index) => {
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
