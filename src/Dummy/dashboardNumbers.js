import { randomBoundInteger } from '@Functions';

const dummy = {
    riskStep: randomBoundInteger(5),
    total: randomBoundInteger(),
    attack_type: randomBoundInteger(10),
    attack: randomBoundInteger(),
    device: randomBoundInteger(100),
    module: randomBoundInteger(),
};

export default dummy;
