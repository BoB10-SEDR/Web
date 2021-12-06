import '@Styles/magicianForm.css';
import useSWR from 'swr';
import { useForm } from 'react-hook-form';
import Button from '@Components/UI/Button';
import { getPolicy, postPolicyActivate, getPolicyDevices, getPolicies } from '@Api/policies';
import { fetcher } from '@Hooks/';

const PolicyForm = props => {
    const { policy, idx } = props;
    const { name, description } = policy;
    const { data: devicesData = { active: [], recommend: [] } } = useSWR(`policies/${idx}/devices`, url =>
        fetcher(url)
    );
    const { data: fetchPolicyData } = useSWR(`/policies/${idx}`, url => fetcher(url));

    const {
        register,
        handleSubmit,
        formState: { error },
    } = useForm();

    const onSubmit = data => {
        const { deviceIdx, ...args } = data;
        const arg = [];
        const payload = {
            ARGUMENT: arg,
        };

        Object.entries(args).forEach(([key, value]) => {
            arg.push({ NAME: key, VALUE: value });
        });

        const activatePolicy = async () => {
            try {
                const data = await postPolicyActivate(idx, deviceIdx, payload);
            } catch (error) {
                console.log(error);
            }
        };

        activatePolicy();
    };

    if (!devicesData) return <div>loading...</div>;
    if (!fetchPolicyData) return <div>loading...</div>;

    const policyData = fetchPolicyData[0].argument;

    return (
        <div className='form'>
            <div className='header'>
                <div className='name'>{name}</div>
                <div className='description'>{description}</div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='inputBox'>
                    <label htmlFor='selectDevice'>
                        <div className='title'>장비 선택</div>
                        <select id='selectDevice' {...register('deviceIdx')}>
                            {devicesData.recommend &&
                                devicesData.recommend.map((device, index) => {
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
                {policyData.map((parameter, index) => {
                    const { name, description, value } = parameter;
                    return (
                        <div key={index} className='inputBox'>
                            <label htmlFor={index}>
                                <div className='title'>{name}</div>
                                <div className='description'>{description}</div>
                                <input id={index} defaultValue={value} {...register(`${name}`)} />
                            </label>
                        </div>
                    );
                })}
                <Button type='submit'>Apply</Button>
            </form>
        </div>
    );
};

export default PolicyForm;
