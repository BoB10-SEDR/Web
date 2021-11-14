import '@Styles/deviceTabs.css';
import { observer } from 'mobx-react';
import { Tabs } from 'react-tabs';
import Details from '@Pages/Logs/Details';
import { CustomTabList, CustomTab, CustomTabPanel, TabContent } from '@Components/CustomTabs';
import TabPanelHeader from '@Components/UI/TabPanelHeader';
import tabStore from '@Stores/deviceTabs';

const DeviceTabs = () => {
    const handleSelect = index => {
        tabStore.setActiveTab(index);
    };

    return (
        <>
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
        </>
    );
};

export default observer(DeviceTabs);
