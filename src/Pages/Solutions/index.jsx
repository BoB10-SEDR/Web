import PageHeading from '@Components/UI/PageHeading';
import Card from '@Components/Card';
import Table from '@Components/Table';
import TableHeading from '@Components/Table/TableHeading';
import Button from '@Components/UI/Button';

const Solutions = () => {
    return (
        <div id='solutions' className='page'>
            <Card>
                <TableHeading>
                    <span>대응 정책</span>
                    <Button>Apply</Button>
                </TableHeading>
                <Table isCheckable />
            </Card>
        </div>
    );
};

export default Solutions;
