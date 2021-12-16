import useSWR from 'swr';
import { useState } from 'react';
import Pagination from 'rc-pagination';
import Card from '@Components/Card';
import Table from '@Components/Table';
import DummyCardEx from '@Dummy/DummyCardEx';
import { fetcher } from '@Hooks/';

const SolutionsTable = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    const { data: solutionsData = {} } = useSWR(`policies?page=${page}&limit=${limit}`, url => fetcher(url), {
        refreshInterval: 60000,
    });

    const { count, data = [] } = solutionsData;

    const handlePageChange = (current, pageSize) => {
        setPage(current);
    };

    return (
        <Card title='대응정책 적용/해제'>
            <DummyCardEx height='314px'>
                <Table schema='simpleSolutions' hasToggle toggleId='idx' browseData={data} />
                <Pagination total={count} pageSize={limit} current={page} onChange={handlePageChange} />
            </DummyCardEx>
        </Card>
    );
};

export default SolutionsTable;
