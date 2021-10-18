import '@Styles/sideTabs.css';
import { observer } from 'mobx-react';
import { Tabs, TabList, TabPanel } from 'react-tabs';
import SideTab from '@Components/SideTabs/SideTab';
import store from '@Stores/deviceTabs';

const SideTabs = () => {
    return (
        <Tabs className='sideTabs' selectedIndex={store.getActiveTab()} selectedTabClassName='active'>
            <TabList className='sideTabList'>
                {store.tabs.map((tab, index) => {
                    const Icon = tab.Icon;
                    return (
                        <SideTab key={index} tabIndex={index} onClick={() => store.setActiveTab(index)}>
                            <Icon size='20' />
                        </SideTab>
                    );
                })}
            </TabList>
            {store.tabs.map((tab, index) => (
                <TabPanel key={index}></TabPanel>
            ))}
        </Tabs>
    );
};

export default observer(SideTabs);
