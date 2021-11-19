import { randomBoundInteger, randomPercent } from '@Functions/';

const dummy = {
    totalLogs: randomBoundInteger(),
    changeNumber: randomBoundInteger(),
    changeRate: randomBoundInteger(100),
    attackList: [
        { name: '기기', desc: 'A, B, C, D에 적용 됨', value: randomPercent() },
        { name: '사용자 계정', desc: 'A, B, C, D에 적용 됨', value: randomPercent() },
        { name: '네트워크', desc: 'A, B, C, D에 적용 됨', value: randomPercent() },
        { name: '제품 보안', desc: 'A, B, C, D에 적용 됨', value: randomPercent() },
    ],
};

export default dummy;
