import { randomBoundInteger } from '@Functions/';

const dummy = {
    totalLogs: randomBoundInteger(),
    disorderLogs: randomBoundInteger(100),
    devices: randomBoundInteger(10),
};

export default dummy;
