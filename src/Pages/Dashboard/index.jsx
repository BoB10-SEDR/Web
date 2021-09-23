import Card from '@Components/Card';
import Bar from '@Components/Charts/Bar';
import Pie from '@Components/Charts/Pie';
import BarDummy from '@Dummy/barChartDummy';
import PieDummy from '@Dummy/pieChartDummy';
import { Status } from '@Components/UI';

const Dashboard = () => {
    return (
        <div id='dashboard'>
            <Card title='Status 테스트'></Card>
        </div>
    );
};

export default Dashboard;
