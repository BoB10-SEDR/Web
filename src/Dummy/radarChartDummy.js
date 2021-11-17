import { randomRangeIntegerArray } from '@Functions/';

const rangeConfig = {
    range: [0, 100],
    isLeftIncluded: true,
    isRightIncluded: true,
};

const dummy = {
    chartID: 'radarChart',
    labelName: '더미 데이터셋',
    labels: ['유형 1', '유형 2', '유형 3', '유형 4', '유형 5'],
    data: randomRangeIntegerArray(rangeConfig, 5),
};

export default dummy;
