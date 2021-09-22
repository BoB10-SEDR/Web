/* eslint-disable react-hooks/exhaustive-deps */
import '@Styles/chart.css';
import { Chart } from 'chart.js';
import { useEffect } from 'react';
import { fixedChartData, getChartOptions } from './data';
import { lineChartDummy } from '@Dummy/lineChartDummy.js';

const LineArea = props => {
    // TODO_P :: props 제거
    const {
        labels = [],
        labelName = '',
        data = [],
        unitCallback,
        labelCallback,
        chartID = 'lineChart',
    } = lineChartDummy;

    const chartData = {
        labels: labels,
        datasets: [{ ...fixedChartData, label: labelName, data: data }],
    };

    const chartOptions = getChartOptions(unitCallback, labelCallback);

    useEffect(() => {
        lineChartInit(chartID, chartData, chartOptions);
    }, []);

    // TODO_P :: id, className, 그 이외의 설정들에 대한 컴포넌트화가 진행중임.
    return (
        <div id='lineChartArea'>
            <canvas id={chartID} />
        </div>
    );
};

export default LineArea;

const lineChartInit = (id, data, option) => {
    var ctx = document.getElementById(`${id}`);
    new Chart(ctx, { type: 'line', data: data, options: option });
    Chart.defaults.global.defaultFontFamily = 'Nunito, NanumSquare';
};
