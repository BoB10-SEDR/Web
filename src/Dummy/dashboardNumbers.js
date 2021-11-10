import { randomBoundIngeter } from '@Functions';

const dummy = {
    riskStep: randomBoundIngeter(5),
    totalLogs: randomBoundIngeter(),
    attacks: randomBoundIngeter(10),
    attackLogs: randomBoundIngeter(),
    devices: randomBoundIngeter(100),
    sensors: randomBoundIngeter(),
};

export default dummy;
