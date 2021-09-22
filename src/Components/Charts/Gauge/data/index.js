export const getGaugeChartOptions = (baseColor = '#650434') => {
    return {
        chart: {
            width: '',
            height: 300,
        },
        circularAxis: { title: 'km/h', scale: { min: 0, max: 100 } },
        series: {
            angleRange: {
                start: 270,
                end: 90,
            },
            dataLabels: { visible: true, offsetY: -200, formatter: value => `${value} %` },
        },
        plot: {
            // width: '100%',
            bands: [
                { range: [0, 20], color: '#e4a0c2' },
                { range: [20, 50], color: '#dc4d94' },
                { range: [50, 100], color: '#a90757' },
            ],
        },
        theme: {
            chart: { fontFamily: 'Impact' },
            circularAxis: {
                title: { fontWeight: 500, fontSize: 30, color: baseColor },
                label: { color: baseColor, fontSize: 15 },
                tick: { strokeStyle: baseColor },
                strokeStyle: baseColor,
            },
            series: {
                clockHand: {
                    color: baseColor,
                    baseLine: 10,
                },
                pin: {
                    radius: 10,
                    color: baseColor,
                    borderWidth: 5,
                    borderColor: 'rgba(101, 4, 52, 0.3)',
                },
                dataLabels: {
                    fontSize: 30,
                    color: '#fff',
                    textBubble: {
                        visible: true,
                        backgroundColor: baseColor,
                        paddingX: 5,
                        paddingY: 5,
                    },
                },
            },
            plot: { bands: { barWidth: 50 } },
        },
    };
};
