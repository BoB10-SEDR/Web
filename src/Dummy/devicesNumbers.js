import { randomBoundInteger, randomPercent } from '@Functions/';

const dummy = {
    totalLogs: randomBoundInteger(),
    changeNumber: randomBoundInteger(),
    changeRate: randomBoundInteger(100),
    attackList: [
        { name: 'SQL Injection', desc: 'A, B, C, D에 적용 됨', value: randomPercent() },
        { name: '이러이러한 공격', desc: 'A, B, C, D에 적용 됨', value: randomPercent() },
        { name: '짧', desc: 'A, B, C, D에 적용 됨', value: randomPercent() },
        { name: '그 외 나머지', desc: 'A, B, C, D에 적용 됨', value: randomPercent() },
    ],
};

export default dummy;
