import { sub, format } from 'date-fns';

const dummy = [
    {
        date: format(Date.now(), 'yyyy-MM-dd HH:mm:ss'),
        fail: 2,
        fail_rate: 25,
        info: 1,
        info_rate: 12,
        threat: 5,
        threat_rate: 62,
        total: 8,
    },
    {
        date: format(sub(Date.now(), { minutes: 10 }), 'yyyy-MM-dd HH:mm:ss'),
        fail: 3,
        fail_rate: 23,
        info: 4,
        info_rate: 30,
        threat: 6,
        threat_rate: 46,
        total: 13,
    },
    {
        date: format(sub(Date.now(), { minutes: 20 }), 'yyyy-MM-dd HH:mm:ss'),
        fail: 1,
        fail_rate: 9,
        info: 3,
        info_rate: 27,
        threat: 7,
        threat_rate: 63,
        total: 11,
    },
];

export default dummy;
