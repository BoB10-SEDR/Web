/* eslint-disable react-hooks/exhaustive-deps */
import '@Styles/chart.css';
import { Chart } from 'chart.js';
import { useEffect, useState } from 'react';
import { fixedRadarData, getRadarOptions } from './data';
import radarChartDummy from '@Dummy/radarChartDummy';

const Radar = props => {
    // TODO_P :: props 템플릿화 & 명세에 적기 & dummy 해제
    const [receivedData, setRadarData] = useState(radarChartDummy);
    const {
        chartID = 'radarChart',
        labelName = '',
        labels: dummyLabels = [],
        data: dummyData = [],
        labelCallback,
    } = receivedData;
    const { labels = dummyLabels, data = dummyData } = props;
    let chart = null;

    const radarData = {
        labels: labels,
        datasets: [{ ...fixedRadarData, label: labelName, data: data }],
    };

    const radarOptions = getRadarOptions(labelCallback);

    useEffect(() => {
        radarChartInit(chart, chartID, radarData, radarOptions);

        // TODO_P :: 데이터 불러와서 초기화
        setRadarData({
            chartID: 'radarChart',
            labelName: '공격유형 레이더',
        });
    }, []);

    useEffect(() => {
        if (!chart) return;
        chart.data.datasets[0].data = data;
        chart.update();
    }, [data]);

    return (
        <div id='radarChartArea'>
            <canvas id={chartID} />
        </div>
    );
};

export default Radar;

const radarChartInit = (chart, id = 'radarChart', data = {}, options = {}) => {
    if (data === {}) return;

    // TODO_P :: data가 없다면 예외처리.
    var ctx = document.getElementById(`${id}`);
    const config = { type: 'radar', data: data, options: options };
    chart = new Chart(ctx, config);
    Chart.defaults.global.defaultFontFamily = 'NanumSquare';
};
