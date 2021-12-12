import '@Styles/magicianForm.css';
import { observer } from 'mobx-react';
import { Tabs } from 'react-tabs';
import { CustomTabList, CustomTab, CustomTabPanel } from '@Components/CustomTabs';
import store from '@Stores/policyMagician';
import PolicyForm from '@Components/Modal/ModalContent/PolicyForm';

const PolicyFormatter = () => {
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
                    <div className='header'>정책 마법사</div>
                    <CustomTabList>
                        {store.selectedList.map((policy, index) => {
                            return (
                                <CustomTab key={policy.idx} tabIndex={index}>
                                    <TabContent tabIndex={index} policy={policy} />
                                </CustomTab>
                            );
                        })}
                    </CustomTabList>
                </div>
                <div className='tabForm'>
                    {store.selectedList.map(policy => {
                        return (
                            <CustomTabPanel key={policy.idx}>
                                <PolicyForm policy={policy} />
                            </CustomTabPanel>
                        );
                    })}
                </div>
            </Tabs>
        </div>
    );
};

const TabContent = props => {
    const { tabIndex, policy } = props;
    const { name, main, classify, sub } = policy;

    return (
        <div className='tabContent'>
            <div className='name'>{name}</div>
            <div className='category'>{`${main} / ${classify} / ${sub}`}</div>
        </div>
    );
};

export default observer(PolicyFormatter);
