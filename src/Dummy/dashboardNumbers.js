import { randomBoundInteger } from '@Functions';

const dummy = {
    riskStep: randomBoundInteger(5),
    totalLogs: randomBoundInteger(),
    attacks: randomBoundInteger(10),
    attackLogs: randomBoundInteger(),
    devices: randomBoundInteger(100),
    sensors: randomBoundInteger(),
};

export default dummy;
