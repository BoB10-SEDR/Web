import { useState } from 'react';
import useSWR from 'swr';
import '@Styles/modalContent.css';
import Table from '@Components/Table';
import { fetcher } from '@Hooks/';
import store from '@Stores/logMagician';
import Button from '@Components/UI/Button';

const SelectDevice = props => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { data: devicesData, error } = useSWR(`/devices?page=${page}&limit=${limit}`, url => fetcher(url));

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
            <Table
                isCheckable
                isSubmitted={isSubmitted}
                browseData={devicesData}
                onSubmit={data => store.setDeviceList(data)}
                defaultRowHeight='30'
                defaultFontSize='14'
                schema='simpleDevice'
            ></Table>
        </div>
    );
};

export default SelectDevice;
