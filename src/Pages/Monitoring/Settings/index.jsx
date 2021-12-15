import { useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import axios from 'axios';
import Modal from '@Components/Modal';
import LogMagician from '@Components/Modal/ModalContent/LogMagician';
import ConfigButtons from '@Components/UI/ConfigButtons';
import ManageTable from '@Components/ManageTable';
import MonitoringForm from '@Components/Modal/ModalContent/MonitoringForm';
import { fetcher } from '@Hooks/';

const Settings = () => {
    const { mutate } = useSWRConfig();
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const { data: monitoringData = [], error } = useSWR(
        `/monitoring`,
        () => fetcher(`/monitoring?page=${page}&limit=${limit}`),
        { revalidateOnFocus: false }
    );

    const onToggleActivate = async ({ row }, isActive) => {
        const { device_idx, process_name, log_path: path, log_regex: regex } = row.values;
        const body = {
            device_idx,
            process_name,
            path,
            regex: regex ?? '',
            isActive,
        };

        try {
            const response = await axios.post(`/monitoring`, body);
            mutate(`/monitoring`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div id='monitoringSettings' className='page'>
            <ManageTable
                hasToggle
                title='모니터링 설정'
                toggleId='idx'
                toggleValueField='activate'
                schema='monitoring'
                browseData={monitoringData}
                onToggleActivate={({ row }) => onToggleActivate({ row }, true)}
                onToggleInactivate={({ row }) => onToggleActivate({ row }, false)}
                isTimestampFormattable
                timestampHeader='update_time'
                ConfigButtons={Configs}
            >
                <Modal hasButton buttonContent='파일 추가'>
                    <LogMagician />
                </Modal>
            </ManageTable>
        </div>
    );
};

const Configs = ({ rowValues }) => {
    const EditModal = () => {
        return <MonitoringForm isEdit file={rowValues} />;
    };
    return <ConfigButtons EditModal={EditModal} />;
};

export default Settings;
