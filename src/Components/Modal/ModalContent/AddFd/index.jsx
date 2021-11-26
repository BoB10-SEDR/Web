import '@Styles/addFd.css';
import { useState, useCallback, useEffect } from 'react';
import useSWR from 'swr';
import '@Styles/modalContent.css';
import Table from '@Components/Table';
import { fetcher } from '@Hooks/';
import store from '@Stores/logMagician';
import Button from '@Components/UI/Button';
import Status from '@Components/UI/Status';

const AddFd = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleClick = () => {
        setIsSubmitted(true);
    };

    const applyButtonStyle = {
        position: 'absolute',
        zIndex: 3,
        top: '15px',
        right: '20px',
    };

    return (
        <div id='addFd' className='modalContent'>
            <div className='header'>
                <div className='name'>모니터링 파일 선택</div>
                <div className='description'>장비-프로세스-파일 순으로 선택하세요</div>
            </div>
            <Button buttonStyle={applyButtonStyle} onClick={handleClick}>
                Apply
            </Button>
            <DeviceTable isSubmitted={isSubmitted} />
        </div>
    );
};

const DeviceTable = props => {
    const { isSubmitted } = props;
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
            isSubmitted={isSubmitted}
            browseData={filteredData}
            onSubmit={data => store.setDeviceList(data)}
            defaultRowHeight='30'
            defaultFontSize='14'
            schema='simpleDevice'
            renderRowSubComponent={renderRowSubComponent}
        />
    );
};

const ProcessTable = props => {
    const { deviceIdx } = props;
    const { data = [], error } = useSWR(`/monitoring/${deviceIdx}/process`, url => fetcher(url));

    const renderRowSubComponent = ({ row }) => {
        const { pid } = row.values;
        return <FileTable deviceIdx={deviceIdx} pid={pid} />;
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

const FileTable = props => {
    const { deviceIdx, pid } = props;
    const { data, error } = useSWR(`/monitoring/${deviceIdx}/process/${pid}/filedescriptor`, url => fetcher(url));

    if (!data) return <div>loading...</div>;

    return (
        <div className='fileList'>
            <Table isCheckable schema='files' browseData={data} defaultRowHeight='30' defaultFontSize='14' />
        </div>
    );
};

export default AddFd;
