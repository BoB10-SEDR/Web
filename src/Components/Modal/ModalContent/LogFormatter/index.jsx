import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { Tabs } from 'react-tabs';
import { CustomTabList, CustomTab, CustomTabPanel } from '@Components/CustomTabs';
import store from '@Stores/logMagician';
import MonitoringForm from '@Components/Modal/ModalContent/MonitoringForm';

const LogFormatter = () => {
    const handleSelect = index => {
        store.setActiveTab(index);
    };

    return (
        <div id='magician'>
            <Tabs
                className='tabs'
                selectedIndex={store.activeTab}
                selectedTabClassName='active'
                onSelect={handleSelect}
            >
                <div className='leftTab'>
                    <div className='header'>로그 포매터</div>
                    <CustomTabList>
                        {store.fdList.map((file, index) => {
                            const { idx, name } = file;
                            return (
                                <CustomTab key={index} tabIndex={index}>
                                    <TabContent tabIndex={index} file={file} description={`${idx} / ${name}`} />
                                </CustomTab>
                            );
                        })}
                    </CustomTabList>
                </div>
                <div className='tabForm'>
                    {store.fdList.map(file => {
                        return (
                            <CustomTabPanel key={file.idx}>
                                <MonitoringForm file={file} />
                            </CustomTabPanel>
                        );
                    })}
                </div>
            </Tabs>
        </div>
    );
};

const TabContent = props => {
    const { file, description } = props;
    const { idx, name, path, pid } = file;

    return (
        <div className='tabContent'>
            <div className='name'>{path}</div>
            <div className='category'>{description}</div>
        </div>
    );
};

export default observer(LogFormatter);
