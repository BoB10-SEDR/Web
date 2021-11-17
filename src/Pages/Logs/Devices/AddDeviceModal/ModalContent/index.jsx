import useSWR from 'swr';
import Button from '@Components/UI/Button';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { fetcher } from '@Hooks/';

const ModalContent = props => {
    const { onClose = () => {} } = props;
    const { data: deviceCategoryList, error: deviceCategoryListError } = useSWR(`devices/categories`, url =>
        fetcher(url)
    );
    const { data: networkCategoryList, error: networkCategoryListError } = useSWR(`networks/categories`, url =>
        fetcher(url)
    );
    const { data: environmentCategoryList, error: environmentCategoryListError } = useSWR(
        `environments/categories`,
        url => fetcher(url)
    );

    const {
        register,
        handleSubmit,
        formState: { error },
    } = useForm();

    const onSubmit = async data => {
        try {
            const response = await axios.post(`devices`, data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const createSelector = categoryList => {
        return categoryList.map(category => {
            const { idx, name } = category;
            return (
                <option key={idx} value={idx}>
                    {name}
                </option>
            );
        });
    };

    if (!deviceCategoryList) return <div>loading...</div>;
    if (!networkCategoryList) return <div>loading...</div>;
    if (!environmentCategoryList) return <div>loading...</div>;

    return (
        <div id='modalContent'>
            <div className='title'>장비 추가하기</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label for='name'>
                    <div className='name'>장비 명</div>
                </label>
                <input id='name' {...register(`name`)} />

                <label for='model_name'>
                    <div className='name'>모델 명</div>
                </label>
                <input id='model_name' {...register(`model_name`)} />

                <label for='category'>
                    <div className='name'>장비 카테고리</div>
                </label>
                <select id='category' {...register(`category`)}>
                    {createSelector(deviceCategoryList)}
                </select>

                <label for='network'>
                    <div className='name'>네트워크 카테고리</div>
                </label>
                <select id='network' {...register(`network`)}>
                    {createSelector(networkCategoryList)}
                </select>

                <label for='environment'>
                    <div className='name'>장비 설치환경</div>
                </label>
                <select id='environment' {...register(`environment`)}>
                    {createSelector(environmentCategoryList)}
                </select>
                <Button type='submit' className='block'>
                    Add
                </Button>
            </form>
        </div>
    );
};

export default ModalContent;
