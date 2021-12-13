import '@Styles/magicianForm.css';
import useSWR from 'swr';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import Button from '@Components/UI/Button';
import { fetcher } from '@Hooks/';
import axios from 'axios';
import ArgumentForm from './ArgumentForm';

const PolicyForm = props => {
    const { isEdit, policy } = props;
    const { idx, policy_idx, name, description } = policy;
    const { data: devicesData = { active: [], recommend: [] } } = useSWR(
        `policies/${idx}/devices`,
        url => fetcher(url),
        { refreshInterval: 60000 }
    );
    const { data: fetchPolicyData } = useSWR(`/policies/${idx}`, url => fetcher(url));

    const methods = useForm();
    const {
        register,
        handleSubmit,
        formState: { error },
    } = methods;

    if (!devicesData) return <div>loading...</div>;
    if (!fetchPolicyData) return <div>loading...</div>;

    const { security_category_idx = 0, argument } = fetchPolicyData[0];

    const onSubmit = data => {
        const { deviceIdx, ...args } = data;
        const argsData = {};

        Object.entries(args).map(([key, value]) => {
            argsData[key] = value;
        });

        const addPolicy = async () => {
            const body = {
                device_idx: deviceIdx,
                policy_idx: policy_idx ?? idx,
                security_category_idx,
                activate: true,
                data: argsData,
            };
            try {
                const data = await axios.post(`/policies/custom`, body);
                alert('success');
            } catch (error) {
                alert('error');
                console.log(error);
            }
        };

        const editPolicy = async () => {
            const body = {
                custom_policy_idx: idx,
                data: argsData,
            };

            try {
                const data = await axios.put(`/policies/custom`, body);
                alert('success');
            } catch (error) {
                alert('error');
                console.log(error);
            }
        };

        if (isEdit) {
            editPolicy();
        } else {
            addPolicy();
        }
    };

    return (
        <div className='form'>
            <Header name={name} description={description} />
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DeviceInput devicesData={devicesData} />
                    <ArgumentForm argument={argument} />
                    <Button type='submit'>Apply</Button>
                </form>
            </FormProvider>
        </div>
    );
};

const Header = props => {
    const { name, description } = props;
    return (
        <div className='header'>
            <div className='name'>{name}</div>
            <div className='description'>{description}</div>
        </div>
    );
};

const DeviceInput = ({ devicesData = [] }) => {
    const { register } = useFormContext();

    return (
        <div className='inputBox'>
            <label htmlFor='selectDevice'>
                <div className='title'>장비 선택</div>
                <select id='selectDevice' {...register('deviceIdx', { required: true })}>
                    {devicesData.recommand &&
                        devicesData.recommand.map((device, index) => {
                            const { idx, name } = device;
                            return (
                                <option key={idx} value={idx}>
                                    {name}
                                </option>
                            );
                        })}
                </select>
            </label>
        </div>
    );
};

export default PolicyForm;
