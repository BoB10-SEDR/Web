import Chart from '@Components/Charts/Chart';

const Bar = props => {
    const isHorizontal = props.isHorizontal;
    const { id, data, options } = props;

    const config = {
        type: isHorizontal ? 'horizontalBar' : 'bar',
        data: data,
        options: options,
    };

    return <Chart id='barChartArea' config={config} />;
};

export default Bar;
