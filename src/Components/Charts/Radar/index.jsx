/* eslint-disable react-hooks/exhaustive-deps */
import '@Styles/chart.css';
import { fixedRadarData, getRadarOptions } from './data';
import radarChartDummy from '@Dummy/radarChartDummy';
import Chart from '@Components/Charts/Chart';

const Radar = props => {
    // TODO_P :: props 템플릿화 & 명세에 적기 & dummy 해제
    const {
        chartID = 'radarChart',
        labelName = '',
        labels: dummyLabels = [],
        data: dummyData = [],
        labelCallback,
    } = radarChartDummy;
    const { labels = dummyLabels, data = dummyData } = props;

    const chartData = {
        labels: labels,
        datasets: [{ ...fixedRadarData, label: labelName, data: data }],
    };

    const chartOptions = getRadarOptions(labelCallback);

    const config = { type: 'radar', data: chartData, options: chartOptions };

    return <Chart id='radarChartArea' config={config} />;
};

export default Radar;
