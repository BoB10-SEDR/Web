import axios from 'axios';
import useSWR, { useSWRConfig } from 'swr';
import { useState } from 'react';
import Modal from '@Components/Modal';
import SelectLogFile from '@Components/Modal/ModalContent/SelectLogFile';
import Table from '@Components/Table';
import { fetcher } from '@Hooks/';

const LogMagician = () => {
    const buttonCustom = {
        position: 'absolute',
        top: '15px',
        right: '70px',
    };

    return (
        <div id='fileSelector'>
            <Modal hasButton buttonStyle={buttonCustom} buttonContent='파일 추가'>
                <SelectLogFile />
            </Modal>
            <ManageTable />
        </div>
    );
};

const ManageTable = () => {
    const { mutate } = useSWRConfig();
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const { data: monitoringData = [], error } = useSWR(`/monitoring?page=${page}&limit=${limit}`, url => fetcher(url));

    const onToggleActivate = async ({ row }) => {
        const { device_idx: deviceIdx, idx: policyIdx } = row;
        try {
            const response = await axios.post(`/monitoring/${deviceIdx}/state`);
            mutate(`/monitoring`);
        } catch (error) {
            console.log(error);
        }
    };

    const onToggleInactivate = async ({ row }) => {
        const { device_idx: deviceIdx, idx: policyIdx } = row;
        try {
            const response = await axios.post(`/monitoring/${deviceIdx}/state`);
            mutate(`/monitoring`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Table
            hasConfig
            hasToggle
            toggleId='idx'
            toggleValueField='activate'
            schema='monitoring'
            browseData={monitoringData}
            onToggleActivate={onToggleActivate}
            onToggleInactivate={onToggleInactivate}
        />
    );
};

export default LogMagician;
