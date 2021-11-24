/* eslint-disable react-hooks/exhaustive-deps */
import '@Styles/chart.css';
import { Chart } from 'chart.js';
import { useEffect, useState, useRef } from 'react';
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
    const chartContainer = useRef(null);
    const [chart, setChart] = useState(null);

    const chartData = {
        labels: labels,
        datasets: [{ ...fixedChartData, label: labelName, data: data }],
    };

    const chartOptions = getChartOptions(unitCallback, labelCallback);

    const chartInit = (container, data, option) => {
        const config = { type: 'line', data: data, options: option };
        const chart = new Chart(container.current, config);
        Chart.defaults.global.defaultFontFamily = 'NanumSquare';

        return chart;
    };

    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            const instance = chartInit(chartContainer, chartData, chartOptions);
            setChart(instance);
        }
    }, [chartContainer]);

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
            <canvas id={chartID} ref={chartContainer} />
        </div>
    );
};

export default LineArea;
