import { useState } from 'react';
import useSWR from 'swr';
import EventViewer from '@Components/EventViewer';
import { fetcher } from '@Hooks/';
import dummyLogs from '@Dummy/logMagician';

const MagicianEventViewer = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(20);
    const { data = [], error } = useSWR(`/monitoring/6?page=${page}&limit=${limit}`, url => fetcher(url), {
        refreshInterval: 60000,
    });

    return <EventViewer defaultPadding='0 1.25rem 1.25rem 1.25rem' schema='logMagician' data={data} />;
};

export default MagicianEventViewer;
