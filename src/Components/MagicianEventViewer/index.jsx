import { useState } from 'react';
import useSWR from 'swr';
import Pagination from 'rc-pagination';
import EventViewer from '@Components/EventViewer';
import { fetcher } from '@Hooks/';
import dummyLogs from '@Dummy/logMagician';

const MagicianEventViewer = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(7000);
    const { data: monitoringData = {}, error } = useSWR(
        `/monitoring/log?page=${page}&limit=${limit}`,
        url => fetcher(url),
        {
            refreshInterval: 60000,
            compare: (a, b) => {
                return JSON.stringify(a?.data) === JSON.stringify(b?.data);
            },
        }
    );

    const handlePageChange = (current, pageSize) => {
        setPage(current);
    };

    if (!monitoringData) return <div>loading...</div>;
    const { count, data = [] } = monitoringData;

    return (
        <>
            <EventViewer defaultPadding='0 1.25rem 1.25rem 1.25rem' schema='logMagician' data={data} />
            <Pagination total={count} pageSize={limit} current={page} onChange={handlePageChange} />
        </>
    );
};

export default MagicianEventViewer;
