import { useEffect, useState } from 'react';
import PageHeading from '@Components/UI/PageHeading';
import Card from '@Components/Card';
import Table from '@Components/Table';
import TableHeading from '@Components/Table/TableHeading';
import Button from '@Components/UI/Button';
import { getPolicies, postPolicyActivate } from '@Api/policies';

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

    const activateSolutions = async () => {
        try {
            const data = await postPolicyActivate(1, 10);
        } catch (e) {
            alert('정책 적용에 실패했습니다. 다시 시도해주세요');
        }
    };

    return (
        <div id='solutions' className='page'>
            <Card>
                <TableHeading>
                    <span>대응 정책</span>
                    <Button onClick={activateSolutions}>Apply</Button>
                </TableHeading>
                <Table isCheckable schema='solutions' browseData={solutions} />
            </Card>
        </div>
    );
};

export default Solutions;
