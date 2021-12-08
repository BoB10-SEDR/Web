import { useState } from 'react';
import useSWR from 'swr';
import Line from '@Components/Charts/Line';
import { fetcher } from '@Hooks/';
import { format } from 'date-fns';
import { useInterval } from 'react-use';

const TimeLine = () => {
    const [start, setStart] = useState(format(Date.now(), 'yyyy-MM-dd'));
    const [time, setTime] = useState(5);

    const { data: fetchData = [], error } = useSWR(`/monitoring/log/count?time=${time}`, url => fetcher(url), {
        refreshInterval: 60000,
    });

    useInterval(() => {
        setStart(format(Date.now(), 'yyyy-MM-dd'));
    }, 60000);

    const labels = [],
        data = [];

    if (fetchData) {
        fetchData.map((item, index) => {
            if (index > 10) return;
            const { date, total = 0 } = item;
            const timestamp = new Date(date);
            const hours = ('0' + timestamp.getHours()).slice(-2),
                minutes = ('0' + timestamp.getMinutes()).slice(-2);

            labels.push(`${hours}:${minutes}`);
            data.push(total);
        });
    }

    const datasets = [{ data }];

    return <Line labels={labels} datasets={datasets} />;
};

export default TimeLine;
