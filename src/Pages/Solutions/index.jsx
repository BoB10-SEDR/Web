import { useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { observer } from 'mobx-react';
import axios from 'axios';
import Modal from '@Components/Modal';
import ManageTable from '@Components/ManageTable';
import { fetcher } from '@Hooks/';
import PolicyMagician from '@Components/Modal/ModalContent/PolicyMagician';
import store from '@Stores/policyMagician';
import PolicyForm from '@Components/Modal/ModalContent/PolicyForm';
import ConfigButtons from '@Components/UI/ConfigButtons';
import dummySolutions from '@Dummy/solutions';
import { remover } from '@Hooks/';

const Settings = () => {
    const { mutate } = useSWRConfig();
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    const { data: solutionsData = {}, error } = useSWR(`/policies/custom`, () =>
        fetcher(`/policies/custom?page=${page}&limit=${limit}`)
    );

    const { count, data = [] } = solutionsData;

    const onToggleActivate = async ({ row }, activate) => {
        const { idx } = row.values;
        try {
            const response = await axios.post(`/policies/${idx}/state`);
            mutate(`/policies/custom`);
        } catch (error) {
            console.log(error);
        }
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
                onToggleActivate={({ row }) => onToggleActivate({ row }, true)}
                onToggleInactivate={({ row }) => onToggleActivate({ row }, false)}
                ConfigButtons={Configs}
            >
                <Modal hasButton buttonContent='추가하기'>
                    <PolicyMagician />
                </Modal>
            </ManageTable>
        </div>
    );
};

const Configs = ({ rowValues }) => {
    const { mutate } = useSWRConfig();

    const EditModal = () => {
        return <PolicyForm isEdit policy={rowValues} />;
    };

    const handleDelete = () => {
        const customIdx = rowValues.idx;
        const body = { idx: customIdx };
        const callback = () => {
            mutate(`/policies/custom`);
        };
        remover(`/policies/custom`, body, callback);
    };
    return <ConfigButtons EditModal={EditModal} onDelete={handleDelete} />;
};

export default observer(Settings);
