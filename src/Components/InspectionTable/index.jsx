import { observer } from 'mobx-react';
import useSWR, { useSWRConfig } from 'swr';
import { useState } from 'react';
import axios from 'axios';
import Pagination from '@Components/Pagination';
import { fetcher } from '@Hooks/';
import ManageTable from '@Components/ManageTable';
import Button from '@Components/UI/Button';
import dummy from '@Dummy/inspectionTable';
import store from '@Stores/inspection';

const InspectionTable = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const { data: inspectionData = {}, error } = useSWR(`/inspection?page=${page}&limit=${limit}`, url => fetcher(url));
    const { mutate } = useSWRConfig();

    const { count, data = [] } = inspectionData;

    const handlePageChange = (current, pageSize) => {
        setPage(current);
    };

    const handleSubmit = data => {
        if (!data.length) {
            alert('점검 항목을 선택해주세요');
            return;
        }

        store.setSelectedInspections(data);
        store.setIsSubmitted(false);

        const postInspections = async () => {
            const body = {
                apply_list: store.selectedInspections,
            };

            try {
                const response = await axios.post(`/inspection/task`, body);
                mutate(`/inspection/task`);
                alert('success');
            } catch (error) {
                alert('error');
            } finally {
                store.setSelectedInspections([]);
            }
        };

        postInspections();
    };

    const handleClick = () => {
        store.setIsSubmitted(true);
    };

    return (
        <>
            <ManageTable
                title='점검 항목 리스트'
                isCheckable
                schema='inspection'
                browseData={data}
                onSubmit={handleSubmit}
                isSubmitted={store.isSubmitted}
            >
                <Button onClick={handleClick}>점검하기</Button>
            </ManageTable>
            <Pagination total={count} pageSize={limit} current={page} onChange={handlePageChange} />
        </>
    );
};

export default observer(InspectionTable);
