import Line from '@Components/Charts/Line';
import { useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '@Hooks/';

const TimeLine = () => {
    const [start, setStart] = useState('2020-01-01');
    const [time, setTime] = useState(14400);

    const { data: fetchData, error } = useSWR(`/dashboard/logs?start=${start}&time=${time}`, url => fetcher(url));
    const labels = [],
        data = [];

    if (fetchData) {
        console.log(fetchData);
        fetchData.map(item => {
            const { date, info } = item;
            labels.push(date);
            data.push(info);
        });
    }

    return <Line labels={labels} data={data} />;
};

export default TimeLine;
