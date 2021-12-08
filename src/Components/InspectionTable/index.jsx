import { observer } from 'mobx-react';
import useSWR from 'swr';
import axios from 'axios';
import { fetcher } from '@Hooks/';
import ManageTable from '@Components/ManageTable';
import Button from '@Components/UI/Button';
import dummy from '@Dummy/inspection';
import store from '@Stores/inspection';

const InspectionTable = () => {
    const { data = dummy, error } = useSWR(`/inspection`, url => fetcher(url));

    const handleSubmit = data => {
        store.setSelectedInspections(data);
        store.setIsSubmitted(false);

        const postInspections = async () => {
            const body = {
                apply_list: store.selectedInspections.map(item => item.idx),
            };

            try {
                const response = await axios.get(`/inspection/task`, body);
                store.setTicketList(response.data.outputs[0].ticket_list);
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
