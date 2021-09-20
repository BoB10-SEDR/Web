/* eslint-disable react-hooks/exhaustive-deps */
import '@Styles/chart.css';
import { Chart } from 'chart.js';
import { useEffect } from 'react';
import { fixedChartData, getChartOptions } from './data';

const LineArea = props => {
    const propData = {
        labelName: 'Earnings',
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

        data: [0, 50000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],

        unitCallback: (value, index, values) => {
            return '$' + value.toLocaleString();
        },
        labelCallback: (tooltipItem, chart) => {
            var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
            return datasetLabel + ': $' + tooltipItem.yLabel.toLocaleString();
        },

        chartID: 'lineChart',
    };

    const { labels = [], labelName = '', data = [], unitCallback, labelCallback, chartID = 'lineChart' } = propData;

    const chartData = {
        labels: labels,
        datasets: [{ ...fixedChartData, label: labelName, data: data }],
    };

    const chartOptions = getChartOptions(unitCallback, labelCallback);

    useEffect(() => {
        lineChartInit(chartID, chartData, chartOptions);
    }, []);

    // TODO :: id, className, 그 이외의 설정들에 대한 컴포넌트화가 진행중임.
    return (
        <div className='lineChartArea'>
            <canvas id={chartID} />
        </div>
    );
};

export default LineArea;

const lineChartInit = (id, data, option) => {
    var ctx = document.getElementById(`${id}`);
    new Chart(ctx, { type: 'line', data: data, options: option });
};
