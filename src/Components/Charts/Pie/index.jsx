import Chart from '@Components/Charts/Chart';

const Pie = props => {
    const { id, data, options } = props;

    const config = {
        type: 'doughnut',
        data: data,
        options: options,
    };

    return <Chart id='pieChartArea' config={config} />;
};

export default Pie;
