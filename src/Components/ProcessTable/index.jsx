import '@Styles/processTable.css';
import { useEffect } from 'react';
import useSWR from 'swr';
import Table from '@Components/Table';
import { fetcher } from '@Hooks/';

const ProcessTable = props => {
    const { deviceIdx } = props;
    const { data = [], error } = useSWR(`/monitoring/${deviceIdx}/process`, url => fetcher(url));

    // useEffect(() => {

    // }, [])

    if (!data) return <div>loading...</div>;
    console.log(data);

    return (
        <div className='processTable'>
            <Table schema='process' browseData={data} />
        </div>
    );
};

export default ProcessTable;
