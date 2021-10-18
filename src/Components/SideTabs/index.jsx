import '@Styles/sideTabs.css';
import { observer } from 'mobx-react';
import { Tabs, TabList, TabPanel } from 'react-tabs';
import SideTab from '@Components/SideTabs/SideTab';
import store from '@Stores/deviceTabs';

const SideTabs = () => {
    const handleSelect = index => {
        store.setActiveTab(index);
    };

    return (
        <Tabs className='sideTabs' selected={store.activeTab} selectedTabClassName='active' onSelect={handleSelect}>
            <TabList className='sideTabList'>
                {store.tabs.map((tab, index) => {
                    const Icon = tab.Icon;
                    return (
                        <SideTab key={index} tabIndex={index}>
                            <Icon size='20' />
                        </SideTab>
                    );
                })}
            </TabList>
            {store.tabs.map(() => (
                <TabPanel></TabPanel>
            ))}
        </Tabs>
    );
};

export default observer(SideTabs);
