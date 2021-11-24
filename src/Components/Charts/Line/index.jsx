/* eslint-disable react-hooks/exhaustive-deps */
import '@Styles/chart.css';
import { fixedChartData, getChartOptions } from './data';
import { lineChartDummy } from '@Dummy/lineChartDummy.js';
import Chart from '@Components/Charts/Chart';

const LineArea = props => {
    // TODO_P :: props 제거
    const {
        labels: dummyLabels = [],
        data: dummyData = [],
        labelName = '',
        unitCallback,
        labelCallback,
        chartID = 'lineChart',
    } = lineChartDummy;
    const { labels = dummyLabels, data = dummyData } = props;

    const chartData = {
        labels: labels,
        datasets: [{ ...fixedChartData, label: labelName, data: data }],
    };

    const chartOptions = getChartOptions(unitCallback, labelCallback);
    const config = { type: 'line', data: chartData, options: chartOptions };

    // TODO_P :: id, className, 그 이외의 설정들에 대한 컴포넌트화가 진행중임.
    return <Chart id='lineChartArea' config={config} />;
};

export default LineArea;
