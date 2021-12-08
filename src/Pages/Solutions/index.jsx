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

    let { data: solutions = [], error } = useSWR(`/policies/custom`, () => fetcher(`/policies/custom?page=${page}`));

    const onToggleActivate = async ({ row }, activate) => {
        const { device_idx, idx: policy_idx, security_category_idx = 0 } = row.values;
        const body = {
            device_idx,
            policy_idx,
            security_category_idx,
            activate,
            data: null,
        };
        try {
            const response = await axios.post(`/policies/custom`, body);
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
                onToggleActivate={({ row }) => onToggleActivate({ row }, true)}
                onToggleInactivate={({ row }) => onToggleActivate({ row }, false)}
            >
                <Modal hasButton buttonContent='추가하기'>
                    <PolicyMagician />
                </Modal>
            </ManageTable>
        </div>
    );
};

export default observer(Settings);
