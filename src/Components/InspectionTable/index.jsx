import { observer } from 'mobx-react';
import useSWR, { useSWRConfig } from 'swr';
import axios from 'axios';
import { fetcher } from '@Hooks/';
import ManageTable from '@Components/ManageTable';
import Button from '@Components/UI/Button';
import dummy from '@Dummy/inspectionTable';
import store from '@Stores/inspection';

const InspectionTable = () => {
    const { data = dummy, error } = useSWR(`/inspection`, url => fetcher(url));
    const { mutate } = useSWRConfig();

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
    );
};

export default observer(InspectionTable);
