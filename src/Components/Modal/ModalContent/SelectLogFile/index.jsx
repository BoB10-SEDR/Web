import '@Styles/selectLogFile.css';
import { useState, useCallback, useEffect } from 'react';
import { observer } from 'mobx-react';
import useSWR from 'swr';
import Modal from '@Components/Modal';
import '@Styles/modalContent.css';
import Table from '@Components/Table';
import { fetcher } from '@Hooks/';
import store from '@Stores/logMagician';
import Status from '@Components/UI/Status';
import LogFormatter from '@Components/Modal/ModalContent/LogFormatter';

const SelectLogFile = observer(() => {
    return (
        <div id='selectLogFile' className='modalContent'>
            <div className='header'>
                <div className='name'>모니터링 파일 선택</div>
                <div className='description'>장비-프로세스-파일 순으로 선택하세요</div>
            </div>
            <SubmitButton />
            <DeviceTable />
        </div>
    );
});

const SubmitButton = () => {
    const handleClick = () => {
        store.setFdList([]);
        store.setIsSubmitted(true);
    };

    return (
        <div className='submitButton'>
            <Modal hasButton isStacked buttonContent='Apply' buttonClassName='submitButton' onClick={handleClick}>
                <LogFormatter />
            </Modal>
        </div>
    );
};

const DeviceTable = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const [filteredData, setFilteredData] = useState([]);
    let {
        data: devicesData = [],
        error,
        isValidating,
    } = useSWR(`/devices?page=${page}&limit=${limit}`, url => fetcher(url));

    const renderRowSubComponent = useCallback(({ row }) => {
        const { idx } = row.values;
        return <ProcessTable deviceIdx={idx} />;
    }, []);

    useEffect(() => {
        const formattedData = devicesData.map(e => {
            return {
                ...e,
                live: <Status status={e['live'] ? 'CONNECT' : 'DISCONNECT'} />,
            };
        });

        setFilteredData(formattedData);
    }, [isValidating]);

    return (
        <Table
            className='deviceTable'
            isExpandable
            browseData={filteredData}
            defaultRowHeight='30'
            defaultFontSize='14'
            schema='simpleDevice'
            renderRowSubComponent={renderRowSubComponent}
        />
    );
};

const ProcessTable = props => {
    const { deviceIdx } = props;
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(1000);
    const { data = [], error } = useSWR(`/monitoring/${deviceIdx}/process?limit=${limit}&page=${page}`, url =>
        fetcher(url)
    );

    const renderRowSubComponent = ({ row }) => {
        const { pid, name } = row.values;
        return <FileTable deviceIdx={deviceIdx} pid={pid} processName={name} />;
    };

    if (!data) return <div>loading...</div>;

    return (
        <div className='processTable'>
            <Table
                schema='process'
                browseData={data}
                isExpandable
                defaultRowHeight='30'
                defaultFontSize='14'
                renderRowSubComponent={renderRowSubComponent}
            />
        </div>
    );
};

const FileTable = observer(props => {
    const { deviceIdx, pid, processName } = props;
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(1000);
    const {
        data = [],
        error,
        isValidating,
    } = useSWR(`/monitoring/${deviceIdx}/process/${pid}/filedescriptor?limit=${limit}&page=${page}`, url =>
        fetcher(url)
    );
    const [formattedData, setFormattedData] = useState([]);

    useEffect(() => {
        const formattedData = data.map(item => {
            return {
                ...item,
                processName: processName,
                deviceIdx: deviceIdx,
            };
        });
        setFormattedData(formattedData);
    }, [isValidating]);

    const handleSubmit = data => {
        store.addFdList(data);
        store.setIsSubmitted(false);
    };

    if (!data) return <div>loading...</div>;

    return (
        <div className='fileTable'>
            <Table
                isCheckable
                schema='files'
                browseData={formattedData}
                isSubmitted={store.isSubmitted}
                onSubmit={handleSubmit}
                defaultRowHeight='30'
                defaultFontSize='14'
            />
        </div>
    );
});

export default SelectLogFile;
