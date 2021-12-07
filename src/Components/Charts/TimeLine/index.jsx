import { useState } from 'react';
import useSWR from 'swr';
import Line from '@Components/Charts/Line';
import { fetcher } from '@Hooks/';
import { format } from 'date-fns';
import { useInterval } from 'react-use';

const TimeLine = () => {
    const [start, setStart] = useState(format(Date.now(), 'yyyy-MM-dd'));
    const [time, setTime] = useState(5);

    const { data = [], error } = useSWR(`/dashboard/logs?start=${start}&time=${time}`, url => fetcher(url), {
        refreshInterval: 60000,
    });

    useInterval(() => {
        setStart(format(Date.now(), 'yyyy-MM-dd'));
    }, 60000);

    const labels = [];
    const datasets = [];

    if (data) {
        data.map((item, index) => {
            if (index > 10) return;
            const dataset = {};
            const { date, total = 0 } = item;
            const timestamp = new Date(date);
            const hours = ('0' + timestamp.getHours()).slice(-2),
                minutes = ('0' + timestamp.getMinutes()).slice(-2);

            labels.push(`${hours}:${minutes}`);
            dataset.label = index;
            dataset.data = total;
            datasets.push(dataset);
        });
    }

    return <Line labels={labels} datasets={datasets} />;
};

export default TimeLine;
