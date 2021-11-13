import { useEffect, useState } from 'react';
import PageHeading from '@Components/UI/PageHeading';
import Card from '@Components/Card';
import Table from '@Components/Table';
import TableHeading from '@Components/Table/TableHeading';
import Button from '@Components/UI/Button';
import { getPolicies } from '@Api/';
import axios from 'axios';

const Solutions = () => {
    const [solutions, setSolutions] = useState([]);
    const requestConfig = {
        params: {
            page: 1,
            limit: 10,
        },
    };

    useEffect(() => {
        const getPolicies = async () => {
            try {
                setSolutions([]);
                const response = await axios.get('/policies', requestConfig);
                setSolutions(response.data.outputs);
            } catch (e) {
                console.log(e);
            }
        };
        getPolicies();
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
