import { useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { observer } from 'mobx-react';
import axios from 'axios';
import Modal from '@Components/Modal';
import ManageTable from '@Components/ManageTable';
import { fetcher } from '@Hooks/';
import PolicyMagician from '@Components/Modal/ModalContent/PolicyMagician';
import store from '@Stores/policyMagician';
import dummySolutions from '@Dummy/solutions';

const Settings = () => {
    const { mutate } = useSWRConfig();
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    let { data: solutions = dummySolutions, error } = useSWR(`/policies/custom`, () =>
        fetcher(`/policies/custom?page=${page}`)
    );

    const onToggleActivate = async ({ row }) => {
        const { device_idx: deviceIdx, idx: policyIdx } = row;
        try {
            const response = await axios.post(`/policies/${policyIdx}/activate/${deviceIdx}`);
            mutate(`/policies/custom`);
        } catch (error) {
            console.log(error);
        }
    };

    const onToggleInactivate = async ({ row }) => {
        const { device_idx: deviceIdx, idx: policyIdx } = row;
        try {
            const response = await axios.post(`/policies/${policyIdx}/inactivate/${deviceIdx}`);
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
                browseData={solutions}
                isSubmitted={store.isOpen}
                onSubmit={data => store.setSelectedPolicies(data)}
                onToggleActivate={onToggleActivate}
                onToggleInactivate={onToggleInactivate}
            >
                <Modal hasButton buttonContent='추가하기'>
                    <PolicyMagician />
                </Modal>
            </ManageTable>
        </div>
    );
};

export default observer(Settings);
