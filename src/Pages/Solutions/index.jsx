import { useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { observer } from 'mobx-react';
import axios from 'axios';
import Pagination from '@Components/Pagination';
import Modal from '@Components/Modal';
import ManageTable from '@Components/ManageTable';
import { fetcher } from '@Hooks/';
import PolicyMagician from '@Components/Modal/ModalContent/PolicyMagician';
import store from '@Stores/policyMagician';
import PolicyForm from '@Components/Modal/ModalContent/PolicyForm';
import ConfigButtons from '@Components/UI/ConfigButtons';
import dummySolutions from '@Dummy/solutions';
import { remover } from '@Hooks/';
import solutionsStore from '@Stores/solutions';

const Settings = () => {
    const { page, limit } = solutionsStore;
    const { data: solutionsData = {}, mutate } = useSWR(`/policies/custom?page=${page}&limit=${limit}`, url =>
        fetcher(url)
    );

    const { count, data = [] } = solutionsData;

    const onToggleActivate = async ({ row }) => {
        const { idx } = row.values;
        try {
            const response = await axios.post(`/policies/${idx}/state`);
            mutate();
        } catch (error) {
            console.log(error);
        }
    };

    const handlePageChange = (current, pageSize) => {
        solutionsStore.setPage(current);
    };

    return (
        <div id='monitoringSettings' className='page'>
            <ManageTable
                hasToggle
                title='정책 설정'
                toggleId='idx'
                toggleValueField='activate'
                schema='solutions'
                browseData={data}
                isSubmitted={store.isOpen}
                onSubmit={data => store.setSelectedPolicies(data)}
                onToggleActivate={({ row }) => onToggleActivate({ row })}
                onToggleInactivate={({ row }) => onToggleActivate({ row })}
                ConfigButtons={Configs}
            >
                <Modal hasButton buttonContent='추가하기'>
                    <PolicyMagician />
                </Modal>
            </ManageTable>
            <Pagination total={count} pageSize={limit} current={page} onChange={handlePageChange} />
        </div>
    );
};

const Configs = observer(({ rowValues }) => {
    const { mutate } = useSWRConfig();
    const EditModal = () => {
        return <PolicyForm isEdit policy={rowValues} />;
    };

    const handleDelete = () => {
        const customIdx = rowValues.idx;
        const body = { idx: customIdx };
        const { page, limit } = solutionsStore;
        const callback = () => {
            mutate(`/policies/custom?page=${page}&limit=${limit}`);
        };
        remover(`/policies/custom`, body, callback);
    };
    return <ConfigButtons EditModal={EditModal} onDelete={handleDelete} />;
});

export default observer(Settings);
