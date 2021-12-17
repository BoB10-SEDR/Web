import useSWR, { useSWRConfig } from 'swr';
import axios from 'axios';
import { observer } from 'mobx-react';
import Pagination from '@Components/Pagination';
import Modal from '@Components/Modal';
import LogMagician from '@Components/Modal/ModalContent/LogMagician';
import ConfigButtons from '@Components/UI/ConfigButtons';
import ManageTable from '@Components/ManageTable';
import MonitoringForm from '@Components/Modal/ModalContent/MonitoringForm';
import { fetcher } from '@Hooks/';
import { remover } from '@Hooks/';
import store from '@Stores/monitoringSettings';

const Settings = () => {
    const { page, limit } = store;
    const { data: monitoringData = {}, mutate } = useSWR(
        `/monitoring?page=${page}&limit=${limit}`,
        url => fetcher(url),
        { revalidateOnFocus: false }
    );

    const { count, data = [] } = monitoringData;

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
            mutate();
        } catch (error) {
            console.log(error);
        }
    };

    const handlePageChange = (current, pageSize) => {
        store.setPage(current);
    };

    return (
        <div id='monitoringSettings' className='page'>
            <ManageTable
                hasToggle
                title='모니터링 설정'
                toggleId='idx'
                toggleValueField='activate'
                schema='monitoring'
                browseData={data}
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
            <Pagination total={count} pageSize={limit} current={page} onChange={handlePageChange} />
        </div>
    );
};

const Configs = observer(({ rowValues }) => {
    const idx = rowValues.idx;
    const { mutate } = useSWRConfig();

    const EditModal = () => {
        return <MonitoringForm isEdit file={rowValues} />;
    };

    const handleDelete = () => {
        const { page, limit } = store;

        const callback = () => {
            mutate(`/monitoring?page=${page}&limit=${limit}`);
        };
        remover(`/monitoring/${idx}`, null, callback);
    };

    return <ConfigButtons EditModal={EditModal} onDelete={handleDelete} />;
});

export default observer(Settings);
