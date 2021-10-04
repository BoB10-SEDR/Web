import PageHeading from '@Components/UI/PageHeading';
import Card from '@Components/Card';
import Table from '@Components/Table';
import Button from '@Components/UI/Button';

const Solutions = () => {
    return (
        <div id='solutions' className='page'>
            <PageHeading title='Solutions' />
            <Card>
                <TableHeading />
                <Table />
            </Card>
        </div>
    );
};

const TableHeading = () => {
    return (
        <div className='tableHeading'>
            <span>대응 정책</span>
            <Button>Apply</Button>
        </div>
    );
};

export default Solutions;
