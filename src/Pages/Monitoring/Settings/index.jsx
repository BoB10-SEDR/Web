import { useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import axios from 'axios';
import Modal from '@Components/Modal';
import LogMagician from '@Components/Modal/ModalContent/LogMagician';
import SelectLogFile from '@Components/Modal/ModalContent/SelectLogFile';
import ManageTable from '@Components/ManageTable';
import { fetcher } from '@Hooks/';

const Settings = () => {
    const { mutate } = useSWRConfig();
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const { data: monitoringData = [], error } = useSWR(`/monitoring?page=${page}&limit=${limit}`, url => fetcher(url));

    const onToggleActivate = async ({ row }) => {
        const { device_idx: deviceIdx, idx: policyIdx } = row;
        try {
            const response = await axios.post(`/monitoring/${deviceIdx}/activate`);
            mutate(`/monitoring`);
        } catch (error) {
            console.log(error);
        }
    };

    const onToggleInactivate = async ({ row }) => {
        const { device_idx: deviceIdx, idx: policyIdx } = row;
        try {
            const response = await axios.post(`/monitoring/${deviceIdx}/inactivate`);
            mutate(`/monitoring`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div id='monitoringSettings' className='page'>
            <ManageTable
                title='모니터링 설정'
                toggleId='idx'
                toggleValueField='activate'
                schema='monitoring'
                browseData={monitoringData}
                onToggleActivate={onToggleActivate}
                onToggleInactivate={onToggleInactivate}
            >
                <Modal hasButton buttonContent='파일 추가'>
                    <LogMagician />
                </Modal>
            </ManageTable>
        </div>
    );
};

export default Settings;
