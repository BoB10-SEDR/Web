import Hr from '@Components/UI/Border';

import '@Styles/chart.css';
// import Chart from 'react-apexcharts';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import { getSparkLineConfig } from './data';
import { randomData } from '@Dummy/oneSparkLineRowDummy.js';
import Table from '@Components/Table';

const OneSparkLineRow = ({ name }) => {
    // TODO_P :: dummy 해제
    const value = 12345;

    const randomColorHex = Math.round(Math.random() * 0xffffff).toString(16);

    // TODO_P :: dummy(sampleData) 해제, random Color 해제
    return (
        <Sparklines data={randomData(30)} limit={20} height={40}>
            <SparklinesLine color={`#${randomColorHex}`} style={{ strokeWidth: '2', fill: `none` }} />
            <SparklinesSpots />
        </Sparklines>
    );
};

const dummySparklineData = [
    {
        source: '네트워크 공격',
        total: Number(Math.round(Math.random() * 100000 + 1)).toLocaleString(),
        trend: <OneSparkLineRow />,
    },
    {
        source: '코드 인젝션',
        total: Number(Math.round(Math.random() * 100000 + 1)).toLocaleString(),
        trend: <OneSparkLineRow />,
    },
    {
        source: '중복 로그인 시도',
        total: Number(Math.round(Math.random() * 100000 + 1)).toLocaleString(),
        trend: <OneSparkLineRow />,
    },
    {
        source: '그 외 기타',
        total: Number(Math.round(Math.random() * 100000 + 1)).toLocaleString(),
        trend: <OneSparkLineRow />,
    },
];

const SparkLines = () => {
<<<<<<< HEAD
    return <Table schema='sparkline' browseData={dummySparklineData} defaultRowHeight='60px' />;
=======
    return <Table schema='sparkline' browseData={dummySparklineData} defaultRowHeight={60} defaultRowWidth={100} />;
>>>>>>> 135c4f6ad8be31d8e28a1ac27221aebac419227f
};

export default SparkLines;
