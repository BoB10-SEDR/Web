import { randomBoundInteger } from '@Functions/';

const dummy = {
    info: randomBoundInteger(),
    fail: randomBoundInteger(100),
    device: randomBoundInteger(10),
};

export default dummy;
