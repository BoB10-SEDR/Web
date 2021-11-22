/* eslint-disable react-hooks/exhaustive-deps */
import '@Styles/chart.css';
import { Chart } from 'chart.js';
import { useEffect, useCallback } from 'react';
import { fixedChartData, getChartOptions } from './data';
import { lineChartDummy } from '@Dummy/lineChartDummy.js';

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
    let chart = null;

    useEffect(() => {
        lineChartInit(chart, chartID, chartData, chartOptions);
    }, []);

    useEffect(() => {
        if (!chart) return;
        chart.data.labels = labels;
        chart.update();
    }, [labels]);

    useEffect(() => {
        if (!chart) return;
        chart.data.datasets[0].data = data;
        chart.update();
    }, [data]);

    // TODO_P :: id, className, 그 이외의 설정들에 대한 컴포넌트화가 진행중임.
    return (
        <div id='lineChartArea'>
            <canvas id={chartID} />
        </div>
    );
};

export default LineArea;

const lineChartInit = (chart, id, data, option) => {
    const ctx = document.getElementById(`${id}`);
    const config = { type: 'line', data: data, options: option };
    chart = new Chart(ctx, config);
    Chart.defaults.global.defaultFontFamily = 'NanumSquare';
};
