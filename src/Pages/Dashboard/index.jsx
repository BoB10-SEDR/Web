import Card from '@Components/Card';
import Bar from '@Components/Charts/Bar';
import BarDummy from '@Dummy/barChartDummy';

const Dashboard = () => {
    const { data, options, width, height } = BarDummy;
    return (
        <Card title='바 차트'>
            <Bar data={data} options={options} width={width} height={height}></Bar>
        </Card>
    );
};

export default Dashboard;
