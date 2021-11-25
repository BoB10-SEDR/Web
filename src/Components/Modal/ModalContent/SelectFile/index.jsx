import { useState, useCallback, useEffect } from 'react';
import useSWR from 'swr';
import '@Styles/modalContent.css';
import Table from '@Components/Table';
import { fetcher } from '@Hooks/';
import store from '@Stores/logMagician';
import Button from '@Components/UI/Button';
import ProcessTable from '@Components/ProcessTable';
import Status from '@Components/UI/Status';

const SelectFile = () => {
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
        <div className='modalContent'>
            <div className='header'>
                <div className='name'>장비 선택하기</div>
                <div className='description'>모니터링할 장비를 선택해주세요</div>
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
            isExpandable
            isSubmitted={isSubmitted}
            browseData={filteredData}
            onSubmit={data => store.setDeviceList(data)}
            defaultRowHeight='30'
            defaultFontSize='14'
            schema='simpleDevice'
            renderRowSubComponent={renderRowSubComponent}
        ></Table>
    );
};

export default SelectFile;
