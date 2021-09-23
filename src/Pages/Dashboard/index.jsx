import Card from '@Components/Card';
import Bar from '@Components/Charts/Bar';
import BarDummy from '@Dummy/barChartDummy';

const Dashboard = () => {
    const { id, data, options } = BarDummy;
    return <Card title='테이블'></Card>;
};

export default Dashboard;
