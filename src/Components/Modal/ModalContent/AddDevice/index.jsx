import '@Styles/addDeviceModal.css';
import useSWR, { useSWRConfig } from 'swr';
import { useState } from 'react';
import Button from '@Components/UI/Button';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { fetcher } from '@Hooks/';
import ModalHeader from '@Components/Modal/ModalHeader';
import * as dummy from '@Dummy/addDeviceDummy';

//추후 리팩토링 필요
const AddDevice = props => {
    const { onClose = () => {} } = props;
    let { data: deviceCategoryList, error: deviceCategoryListError } = useSWR(`/devices/categories`, url =>
        fetcher(url)
    );
    let { data: networkCategoryList, error: networkCategoryListError } = useSWR(`/networks/categories`, url =>
        fetcher(url)
    );
    let { data: environmentCategoryList, error: environmentCategoryListError } = useSWR(`/devices/environments`, url =>
        fetcher(url)
    );
    const { mutate } = useSWRConfig();
    const [nameError, setNameError] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { error },
    } = useForm();

    const onSubmit = async data => {
        const { name, model_name } = data;
        try {
            const response = await axios.post(`/devices`, data);
            mutate(`/devices/page`);
            alert('success');
        } catch (error) {
            console.log(error);
            alert('fail');
        }
    };

    const createSelector = categoryList => {
        return categoryList.map(category => {
            const { idx, name } = category;
            return (
                <option key={idx} value={name}>
                    {name}
                </option>
            );
        });
    };

    if (!deviceCategoryList) deviceCategoryList = dummy.deviceCategoryList;
    if (!networkCategoryList) networkCategoryList = dummy.networkCategoryList;
    if (!environmentCategoryList) environmentCategoryList = dummy.environmentCategoryList;

    return (
        <div id='addDeviceModal'>
            <div className='header'>
                <ModalHeader title='장비 추가하기' description='추가할 장비 정보를 입력해주세요' />
            </div>
            <form id='addDeviceForm' onSubmit={handleSubmit(onSubmit)} autocomplete='off'>
                <div className='inputBox'>
                    <label for='name'>
                        <div className='title'>장비 명</div>
                    </label>
                    <input id='name' {...register(`name`)} />
                </div>

                <div className='inputBox'>
                    <label for='model_name'>
                        <div className='title'>모델 명</div>
                    </label>
                    <input id='model_name' {...register(`model_name`)} />
                </div>

                <div className='inputBox'>
                    <label for='category'>
                        <div className='title'>장비 카테고리</div>
                    </label>
                    <select id='category' {...register(`category`)}>
                        {createSelector(deviceCategoryList)}
                    </select>
                </div>
                <div className='inputBox'>
                    <label for='network'>
                        <div className='title'>네트워크 카테고리</div>
                    </label>
                    <select id='network' {...register(`network`)}>
                        {createSelector(networkCategoryList)}
                    </select>
                </div>
                <div className='inputBox'>
                    <label for='environment'>
                        <div className='title'>장비 설치환경</div>
                    </label>
                    <select id='environment' {...register(`environment`)}>
                        {createSelector(environmentCategoryList)}
                    </select>
                </div>

                <Button type='submit' className='block'>
                    Add
                </Button>
            </form>
        </div>
    );
};

export default AddDevice;