import Line from '@Components/Charts/Line';
import { useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '@Hooks/';

const TimeLine = () => {
    const [start, setStart] = useState('2021-11-19');
    const [time, setTime] = useState(10);

    const { data: fetchData, error } = useSWR(`/dashboard/logs?start=${start}&time=${time}`, url => fetcher(url), {
        refreshInterval: 10000,
    });
    const labels = [],
        data = [];

    if (fetchData) {
        console.log(fetchData);
        fetchData.map((item, index) => {
            if (index > 5) return;
            const { date, info = 0 } = item;
            const timestamp = new Date(date);
            const hours = ('0' + timestamp.getHours()).slice(-2),
                minutes = ('0' + timestamp.getMinutes()).slice(-2);

            labels.push(`${hours}:${minutes}`);
            data.push(info);
        });
    }

    console.log({ labels, data });

    return <Line labels={labels} data={data} />;
};

export default TimeLine;
