import '@Styles/form.css';
import '@Styles/addDeviceModal.css';
import useSWR from 'swr';
import Button from '@Components/UI/Button';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { fetcher } from '@Hooks/';
import Modal from '@Components/Modal';
import * as dummy from '@Dummy/addDeviceDummy';

const ModalContent = props => {
    const { onClose = () => {} } = props;
    let { data: deviceCategoryList, error: deviceCategoryListError } = useSWR(`/devices/categories`, url =>
        fetcher(url)
    );
    let { data: networkCategoryList, error: networkCategoryListError } = useSWR(`/networks/categories`, url =>
        fetcher(url)
    );
    let { data: environmentCategoryList, error: environmentCategoryListError } = useSWR(
        `/environments/categories`,
        url => fetcher(url)
    );

    const {
        register,
        handleSubmit,
        formState: { error },
    } = useForm();

    const onSubmit = async data => {
        console.log(data);
        try {
            const response = await axios.post(`/devices`, data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
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
                <div className='name'>장비 추가하기</div>
                <div className='description'>추가할 장비 정보를 입력해주세요</div>
            </div>
            <form id='addDeviceForm' onSubmit={handleSubmit(onSubmit)} autocomplete='off'>
                <label for='name'>
                    <div className='title'>장비 명</div>
                </label>
                <input id='name' {...register(`name`)} />

                <label for='model_name'>
                    <div className='title'>모델 명</div>
                </label>
                <input id='model_name' {...register(`model_name`)} />

                <label for='category'>
                    <div className='title'>장비 카테고리</div>
                </label>
                <select id='category' {...register(`category`)}>
                    {createSelector(deviceCategoryList)}
                </select>
                <Modal hasButton buttonContent='추가'>
                    {/* <AddPolicy /> */}
                </Modal>

                <label for='network'>
                    <div className='title'>네트워크 카테고리</div>
                </label>
                <select id='network' {...register(`network`)}>
                    {createSelector(networkCategoryList)}
                </select>
                <Modal hasButton buttonContent='추가'>
                    {/* <AddPolicy /> */}
                </Modal>

                <label for='environment'>
                    <div className='title'>장비 설치환경</div>
                </label>
                <select id='environment' {...register(`environment`)}>
                    {createSelector(environmentCategoryList)}
                </select>
                <Modal hasButton buttonContent='추가'>
                    {/* <AddPolicy /> */}
                </Modal>

                <Button type='submit' className='block'>
                    Add
                </Button>
            </form>
        </div>
    );
};

export default ModalContent;
