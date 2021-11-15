import useSWR from 'swr';
import { observer } from 'mobx-react';
import { useForm } from 'react-hook-form';
import { Tabs } from 'react-tabs';
import { CustomTabList, CustomTab, CustomTabPanel } from '@Components/CustomTabs';
import Button from '@Components/UI/Button';
import store from '@Stores/policyMagician';
import { getPolicy, postPolicyActivate, getPolicyDevices, getPolicies } from '@Api/policies';

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
    const { name, description } = policy;
    const { data: policyData, error: fetchPolicyError } = useSWR(`policies/${idx}`, () => getPolicy(idx));
    const { data: devicesData = { activate: [], recommend: [] }, error: fetchDevicesError } = useSWR(
        `policies/${idx}/devices`,
        () => getPolicyDevices(idx)
    );

    const {
        register,
        handleSubmit,
        formState: { error },
    } = useForm();

    const onSubmit = data => {
        const { deviceIdx, ...args } = data;
        const payload = {
            ARGUMENT: [convertData],
        };

        const convertData = () => {
            Object.entries(args).map(([key, value]) => {
                return { NAME: key, VALUE: value };
            });
        };

        const activatePolicy = async () => {
            try {
                const data = await postPolicyActivate(idx, deviceIdx, payload);
            } catch (error) {
                console.log(error);
            }
        };

        activatePolicy();
    };

    if (!policyData) return <div>loading...</div>;

    return (
        <div className='form'>
            <div className='header'>
                <div className='name'>{name}</div>
                <div className='description'>{description}</div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <select {...register('deviceIdx')}>
                    {devicesData.recommend.map((device, index) => {
                        const { idx, name } = device;
                        return (
                            <option key={idx} value={idx}>
                                {name}
                            </option>
                        );
                    })}
                </select>
                {policyData.argument.map((parameter, index) => {
                    const { name, description, value } = parameter;
                    return (
                        <div key={index} className='parameter'>
                            <div className='name'>{name}</div>
                            <div className='description'>{description}</div>
                            <input value={value} {...register(`${name}`)} />
                        </div>
                    );
                })}
                <Button type='submit'>Apply</Button>
            </form>
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
