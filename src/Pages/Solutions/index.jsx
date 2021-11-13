import { useEffect, useState } from 'react';
import PageHeading from '@Components/UI/PageHeading';
import Card from '@Components/Card';
import Table from '@Components/Table';
import TableHeading from '@Components/Table/TableHeading';
import Button from '@Components/UI/Button';
import { getPolicies } from '@Api/policies';

const Solutions = () => {
    const [solutions, setSolutions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPolicies(1, 10);
                setSolutions(data.outputs);
            } catch (e) {
                setSolutions([]);
            }
        };
        fetchData();
    }, []);

    return (
        <div id='solutions' className='page'>
            <Card>
                <TableHeading>
                    <span>대응 정책</span>
                    <Button>Apply</Button>
                </TableHeading>
                <Table isCheckable schema='solutions' browseData={solutions} />
            </Card>
        </div>
    );
};

export default Solutions;
