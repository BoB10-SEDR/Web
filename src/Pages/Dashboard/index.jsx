import Card from '@Components/Card';
import Bar from '@Components/Charts/Bar';
import BarDummy from '@Dummy/barChartDummy';

const Dashboard = () => {
    const { id, data, options } = BarDummy;
    return (
        <Card title='바 차트'>
            <Bar id={id} data={data} options={options}></Bar>
        </Card>
    );
};

export default Dashboard;
