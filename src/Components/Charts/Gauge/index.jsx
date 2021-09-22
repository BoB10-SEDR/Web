/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getGaugeChartOptions } from './data';

const Gauge = props => {
    // const dummy = {
    //     chartID: 'gaugeChart',
    //     data: {
    //         series: [
    //             {
    //                 name: 'Speed',
    //                 data: [60],
    //             },
    //         ],
    //     },
    // };

    // const { chartID = 'gaugeChart', data = {} } = dummy;

    // const options = getGaugeChartOptions();

    // useEffect(() => {
    //     const el = document.getElementById(chartID);

    //     new GaugeChart({ el, data, options });
    // }, []);

    return <div id='gaugeChartArea'>{/* <div id={chartID} /> */}</div>;
};

export default Gauge;
