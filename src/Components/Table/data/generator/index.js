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
    return range(len).map((e, idx) => {
        return {
            status: <ToggleSwitch id={e} />,
            policyID: `#P048${idx % 10}`,
            policyName: `정책 ${idx}번`,
            applyTarget: `${range(idx)
                .slice(idx - 3, idx + 3)
                .join('번 기기, ')}...`,
            timestamp: `${new Date()}`,
            description: '얼마나 긴지 알기나해? 얼마나 긴지 알기나해?',
        };
    });
};

// export const exampleSchema = [
//     { Header: '상태', accessor: 'status', align: 'center', width: 50, isAbleToSort: false },
//     { Header: '정책 유형 ID', accessor: 'policyID', align: 'left', width: 100, isAbleToSort: true },
//     { Header: '정책 이름', accessor: 'policyName', align: 'left', width: 200, isAbleToSort: true },
//     { Header: '적용 대상', accessor: 'applyTarget', align: 'left', width: 100, isAbleToSort: true },
//     { Header: '마지막 변경 시간', accessor: 'timestamp', align: 'left', width: 100, isAbleToSort: true },
//     { Header: '대응 정책 설명', accessor: 'description', align: 'left', isAbleToSort: true },
// ];

export default genData;
