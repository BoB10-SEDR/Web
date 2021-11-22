import { useState } from 'react';
import useSWR from 'swr';
import Line from '@Components/Charts/Line';
import { fetcher } from '@Hooks/';
import { format } from 'date-fns';
import { useInterval } from 'react-use';

const TimeLine = () => {
    const [start, setStart] = useState(format(Date.now(), 'yyyy-MM-dd'));
    const [time, setTime] = useState(10);

    useInterval(() => {
        setStart(format(Date.now(), 'yyyy-MM-dd'));
    }, 60000);

    const { data: fetchData, error } = useSWR(`/dashboard/logs?start=${start}&time=${time}`, url => fetcher(url));

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
