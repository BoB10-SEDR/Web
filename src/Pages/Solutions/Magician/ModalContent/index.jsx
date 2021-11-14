import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { Tabs } from 'react-tabs';
import { CustomTabList, CustomTab, CustomTabPanel } from '@Components/CustomTabs';
import Button from '@Components/UI/Button';
import store from '@Stores/policyMagician';
import { getPolicy, postPolicyActivate } from '@Api/policies';

const ModalContent = props => {
    const { onClose = () => {} } = props;

    const handleSelect = index => {
        store.setActiveTab(index);
    };

    return (
        <div id='policyMagician'>
            <Tabs
                className='tabs'
                selectedIndex={store.activeTab}
                selectedTabClassName='active'
                onSelect={handleSelect}
            >
                <div className='policyList'>
                    <div className='header'>정책 마법사</div>
                    <CustomTabList>
                        {store.selectedPolicies.map((policy, index) => {
                            return (
                                <CustomTab key={index} tabIndex={index}>
                                    <TabContent tabIndex={index} policy={policy} />
                                </CustomTab>
                            );
                        })}
                    </CustomTabList>
                </div>
                <div className='policyForm'>
                    {store.selectedPolicies.map((policy, index) => {
                        return (
                            <CustomTabPanel key={index}>
                                <PolicyForm idx={policy.idx} policy={policy} />
                            </CustomTabPanel>
                        );
                    })}
                </div>
            </Tabs>
        </div>
    );
};

const PolicyForm = props => {
    const { policy, idx } = props;
    const [parameters, setParameters] = useState([]);

    useEffect(() => {
        const fetchParameters = async () => {
            try {
                const data = await getPolicy(idx);
                setParameters(data.outputs[0].argument);
            } catch (error) {
                setParameters([]);
            }
        };
        fetchParameters();
    }, []);

    return (
        <div className='form'>
            <div className='header'>
                <div className='name'>{policy.name}</div>
                <div className='description'>{policy.description}</div>
            </div>

            <form>
                {parameters.map((param, index) => {
                    return (
                        <div key={index} className='parameter'>
                            <div className='name'>{param.name}</div>
                            <div className='description'>{param.description}</div>
                            <input type='text' value={param.value} />
                        </div>
                    );
                })}
            </form>
            <Button>Apply</Button>
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

export default observer(ModalContent);
