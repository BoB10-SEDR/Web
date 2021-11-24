import { useState } from 'react';
import useSWR from 'swr';
import Radar from '@Components/Charts/Radar';
import { format } from 'date-fns';
import { fetcher } from '@Hooks/';
import { useInterval } from 'react-use';
import { threatDataLabel, threatDataIndex } from './data';

const ThreatRadar = () => {
    const [start, setStart] = useState('2020-01-01');

    const { data: fetchData = [], error: fetchError } = useSWR(
        `/dashboard/logs/attack?start=${start}`,
        url => fetcher(url),
        {
            refreshInterval: 60000,
        }
    );

    useInterval(() => {
        setStart(format(Date.now(), 'yyyy-MM-dd'));
    }, 60000);

    const data = new Array(4);

    if (fetchData) {
        fetchData.map(item => {
            const { main, percent = 0 } = item;
            const index = threatDataIndex[main];
            data.splice(index, 1, percent);
        });
    }

    return <Radar labels={threatDataLabel} data={data} />;
};

export default ThreatRadar;
