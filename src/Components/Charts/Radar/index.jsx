/* eslint-disable react-hooks/exhaustive-deps */
import '@Styles/chart.css';
import { Chart } from 'chart.js';
import { useEffect } from 'react';
import { fixedRadarData, getRadarOptions } from './data';
import radarChartDummy from '@Dummy/radarChartDummy.json';

const Radar = props => {
    // TODO_P :: props 템플릿화 & 명세에 적기 & dummy 해제
    const { chartID = 'radarChart', labelName = '', labels = [], data = [], labelCallback } = radarChartDummy;

    const radarData = {
        labels: labels,
        datasets: [{ ...fixedRadarData, label: labelName, data: data }],
    };

    const radarOptions = getRadarOptions(labelCallback);

    useEffect(() => {
        radarChartInit(chartID, radarData, radarOptions);
    }, []);

    return (
        <div id='radarChartArea'>
            <canvas id={chartID} />
        </div>
    );
};

export default Radar;

const radarChartInit = (id = 'radarChart', data = {}, options = {}) => {
    // TODO_P :: data가 없다면 예외처리.
    var ctx = document.getElementById(`${id}`);
    new Chart(ctx, { type: 'radar', data: data, options: options });
    Chart.defaults.global.defaultFontFamily = 'Nunito, NanumSquare';
};