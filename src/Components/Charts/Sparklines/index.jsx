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
        source: '기기',
        total: Number(Math.round(Math.random() * 100000 + 1)).toLocaleString(),
        trend: <OneSparkLineRow />,
    },
    {
        source: '사용자 계정',
        total: Number(Math.round(Math.random() * 100000 + 1)).toLocaleString(),
        trend: <OneSparkLineRow />,
    },
    {
        source: '네트워크',
        total: Number(Math.round(Math.random() * 100000 + 1)).toLocaleString(),
        trend: <OneSparkLineRow />,
    },
    {
        source: '제품 보안',
        total: Number(Math.round(Math.random() * 100000 + 1)).toLocaleString(),
        trend: <OneSparkLineRow />,
    },
];

const SparkLines = () => {
    return <Table schema='sparkline' browseData={dummySparklineData} defaultRowHeight={60} defaultRowWidth={100} />;
};

export default SparkLines;
