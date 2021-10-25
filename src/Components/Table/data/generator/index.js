import { ToggleSwitch } from '@Components/UI';
import namor from 'namor';

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

const newPerson = () => {
    const statusChance = Math.random();
    return {
        firstName: namor.generate({ words: 1, numbers: 0 }),
        lastName: namor.generate({ words: 1, numbers: 0 }),
        age: Math.floor(Math.random() * 30),
        visits: Math.floor(Math.random() * 100),
        progress: Math.floor(Math.random() * 100),
        status: statusChance > 0.66 ? 'relationship' : statusChance > 0.33 ? 'complicated' : 'single',
    };
};

const makeData = (...lens) => {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth];
        return range(len).map(d => {
            return {
                ...newPerson(),
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
            };
        });
    };

    return makeDataLevel();
};

const genData = (len = 1) => {
    return range(len).map(e => {
        return {
            component: <ToggleSwitch id={e} />,
            left: '좌측정렬 테스트',
            right: '우측 테스트',
            center: '중앙 테스트',
            long: '얼마나 긴지 알기나해? 얼마나 긴지 알기나해?',
        };
    });
};

export default genData;
