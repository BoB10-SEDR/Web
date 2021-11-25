import useSWR from 'swr';
import { fetcher } from '@Hooks/';

const LogList = props => {
    const { deviceIdx, pid } = props;
    const { data, error } = useSWR(`/monitoring/${deviceIdx}/process/${pid}/filedescriptor`, url => fetcher(url));

    console.log({ deviceIdx, pid });

    if (!data) return <div>loading...</div>;

    return data.map(item => {
        const { name, path } = item;
        return <Item title={path} />;
    });
};

const Item = props => {
    const { title, description, onClick = () => {} } = props;
    return (
        <div className='item' onClick={onClick}>
            <div className='title'>{title}</div>
            <div className='description'>{description}</div>
        </div>
    );
};

export default LogList;
