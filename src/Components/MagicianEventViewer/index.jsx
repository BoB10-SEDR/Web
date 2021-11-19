import { useState } from 'react';
import useSWR from 'swr';
import EventViewer from '@Components/EventViewer';
import { fetcher } from '@Hooks/';

const MagicianEventViewer = () => {
    const [limit, setLimit] = useState(20);
    const [page, setPage] = useState(1);
    const { data = [], error } = useSWR(`/devices/logs?limit=${limit}&page=${page}&status=INFO`, url => fetcher(url), {
        refreshInterval: 300000,
    });

    return <EventViewer defaultPadding='0 1.25rem 1.25rem 1.25rem' schema='logMagician' data={data} />;
};

export default MagicianEventViewer;
