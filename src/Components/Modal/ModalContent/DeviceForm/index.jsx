import '@Styles/addDeviceModal.css';
import useSWR, { useSWRConfig } from 'swr';
import useSWRImmutable from 'swr/immutable';
import { useMemo, useEffect } from 'react';
import isIp from 'is-ip';
import Button from '@Components/UI/Button';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import axios from 'axios';
import { fetcher } from '@Hooks/';
import ModalHeader from '@Components/Modal/ModalHeader';
import FormErrorMessage from '@Components/UI/FormErrorMessage';
import ToggleSwitch from '@Components/UI/ToggleSwitch';
import * as dummy from '@Dummy/addDeviceDummy';

//추후 리팩토링 필요
const DeviceForm = ({ deviceIdx }) => {
    const { mutate } = useSWRConfig();
    let { data: deviceCategoryList, error: deviceCategoryListError } = useSWRImmutable(`/devices/categories`, url =>
        fetcher(url)
    );
    let { data: networkCategoryList, error: networkCategoryListError } = useSWRImmutable(`/networks/categories`, url =>
        fetcher(url)
    );
    let { data: environmentCategoryList, error: environmentCategoryListError } = useSWRImmutable(
        `/devices/environments`,
        url => fetcher(url)
    );
    let { data: values = [], isValidating } = useSWRImmutable(deviceIdx && `/devices/${deviceIdx}`, url =>
        fetcher(url)
    );

    const defaultValues = useMemo(() => values.length && values[0], [values]);

    const methods = useForm({
        defaultValues: defaultValues,
    });

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = methods;

    useEffect(() => {
        reset(values[0]);
    }, [isValidating]);

    const onSubmit = async data => {
        console.log(data);
        try {
            if (deviceIdx) {
                const response = await axios.put(`/devices/${deviceIdx}`, data);
            } else {
                const response = await axios.post(`/devices`, data);
            }
            mutate(`/devices`);
            alert('success');
        } catch (error) {
            console.log(error);
            alert('fail');
        }
    };

    if (!deviceCategoryList) deviceCategoryList = dummy.deviceCategoryList;
    if (!networkCategoryList) networkCategoryList = dummy.networkCategoryList;
    if (!environmentCategoryList) environmentCategoryList = dummy.environmentCategoryList;

    const title = deviceIdx ? '장비 정보 수정하기' : '장비 추가하기';
    const description = deviceIdx ? '수정할 장비 정보를 입력해주세요' : '추가할 장비 정보를 입력해주세요';
    const requiredMessage = '필수 작성 목록입니다.';
    const ipValidateMessage = '올바른 IP 형식을 입력해주세요. (IPv4 혹은 IPv6)';

    return (
        <div id='addDeviceModal'>
            <div className='header'>
                <ModalHeader title={title} description={description} />
            </div>
            <FormProvider {...methods}>
                <form id='addDeviceForm' onSubmit={handleSubmit(onSubmit)} autocomplete='off'>
                    <div className='inputBox'>
                        <label for='name'>
                            <div className='title'>장비 명</div>
                        </label>
                        <input id='name' {...register(`name`, { required: requiredMessage })} />
                        <FormErrorMessage errors={errors} name='name' />
                    </div>

                    <div className='inputBox'>
                        <label for='model_name'>
                            <div className='title'>모델 명</div>
                        </label>
                        <input id='model_name' {...register(`model_name`, { required: requiredMessage })} />
                        <FormErrorMessage errors={errors} name='model_name' />
                    </div>

                    <div className='inputBox'>
                        <label for='category'>
                            <div className='title'>장비 카테고리</div>
                        </label>
                        <select id='category' {...register(`category`, { required: true })}>
                            <Selector items={deviceCategoryList} />
                        </select>
                    </div>
                    <div className='inputBox'>
                        <label for='network'>
                            <div className='title'>네트워크 카테고리</div>
                        </label>
                        <select id='network' {...register(`network`, { required: true })}>
                            <Selector items={networkCategoryList} />
                        </select>
                    </div>
                    <div className='inputBox'>
                        <label for='environment'>
                            <div className='title'>장비 설치환경</div>
                        </label>
                        <select id='environment' {...register(`environment`, { required: true })}>
                            <Selector items={environmentCategoryList} />
                        </select>
                    </div>
                    <div className='inputBox'>
                        <label for='init_ip'>
                            <div className='title'>IP</div>
                        </label>
                        <input
                            id='init_ip'
                            {...register(`init_ip`, {
                                required: requiredMessage,
                                validate: value => isIp(value) || ipValidateMessage,
                            })}
                        />
                        <FormErrorMessage errors={errors} name='init_ip' />
                    </div>

                    <AgentToggle />
                    <Button type='submit' className='block'>
                        Add
                    </Button>
                </form>
            </FormProvider>
        </div>
    );
};

const AgentToggle = () => {
    const { register } = useFormContext();
    const isActivate = false;

    const handleActivate = activate => {
        return null;
    };

    return (
        <div className='inputBox agentToggle'>
            <span className='title'>에이전트 실행</span>
            <ToggleSwitch
                {...register('agent')}
                isToggled={isActivate}
                onActivate={() => handleActivate(true)}
                onInactivate={() => handleActivate(false)}
            />
        </div>
    );
};

const Selector = ({ items = [] }) => {
    return items.map(item => {
        const { idx, name } = item;
        return (
            <option key={idx} value={name}>
                {name}
            </option>
        );
    });
};

export default DeviceForm;
