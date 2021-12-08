import '@Styles/manageTable.css';
import Card from '@Components/Card';
import Table from '@Components/Table';
import TableHeading from '@Components/Table/TableHeading';

const ManageTable = props => {
    const { title, children, ...rest } = props;

    return (
        <div id='manageTable'>
            <Card>
                <TableHeading>
                    <span>{title}</span>
                    {children}
                </TableHeading>
                <Table hasConfig {...rest} />
            </Card>
        </div>
    );
};

export default ManageTable;
