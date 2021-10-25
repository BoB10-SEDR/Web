import Card from '@Components/Card';
import { Row, Col } from '@Components/Grid';
import Table from '@Components/Table';
import '@Styles/debug.css';

const Debug = () => {
    return (
        <div id='debug' className='page'>
            <Card title='table'>
                <Table />
            </Card>
        </div>
    );
};

export default Debug;
