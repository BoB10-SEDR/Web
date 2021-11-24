/* eslint-disable react-hooks/exhaustive-deps */
import '@Styles/chart.css';
import { Chart } from 'chart.js';
import { useEffect, useState, useRef } from 'react';
import { fixedRadarData, getRadarOptions } from './data';
import radarChartDummy from '@Dummy/radarChartDummy';

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
    const chartContainer = useRef(null);
    const [chart, setChart] = useState(null);

    const chartData = {
        labels: labels,
        datasets: [{ ...fixedRadarData, label: labelName, data: data }],
    };

    const chartOptions = getRadarOptions(labelCallback);

    const chartInit = (container, data, option) => {
        const config = { type: 'radar', data: data, options: option };
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

    return (
        <div id='radarChartArea'>
            <canvas id={chartID} ref={chartContainer} />
        </div>
    );
};

export default Radar;
