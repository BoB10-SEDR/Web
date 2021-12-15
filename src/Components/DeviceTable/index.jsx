import useSWR, { useSWRConfig } from 'swr';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@Components/Card';
import Table from '@Components/Table';
import FilterButton from '@Components/FilterButton';
import AddDeviceButton from '@Components/AddDeviceButton';
import SearchBar from '@Components/SearchBar';
import DummyCardEx from '@Dummy/DummyCardEx';
import dummyDevices from '@Dummy/deviceTableDummy';
import { fetcher } from '@Hooks/';
import Status from '@Components/UI/Status';
import ConfigButtons from '@Components/UI/ConfigButtons';
import DeviceForm from '@Components/Modal/ModalContent/DeviceForm';
import { remover } from '@Hooks/';

const DeviceTable = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(100);
    const {
        data: devicesData = [],
        error,
        isValidating,
    } = useSWR(`/devices`, () => fetcher(`/devices?page=${page}&limit=${limit}`), {
        refreshInterval: 60000,
        revalidateOnFocus: false,
    });
    const [filteredData, setFilteredData] = useState([]);

    const handleSearch = input => {
        const filtered = devicesData.filter(device => {
            return Object.keys(device).some(key => {
                return String(device[key]).toLowerCase().includes(input.toLowerCase());
            });
        });
        setFilteredData(filtered);
    };

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
        <div id='deviceTable'>
            <div className='tableUtils'>
                <FilterButton />
                <SearchBar onClick={handleSearch} />
                <AddDeviceButton />
            </div>
            <Body tableData={filteredData} />
        </div>
    );
};

const Body = props => {
    const { tableData = [] } = props;
    const { mutate } = useSWRConfig();

    const handleToggleActivate = async ({ row }, isActive) => {
        const deviceIdx = row.values.idx;

        const lazyMutate = () => {
            setTimeout(() => {
                mutate(`/devices`);
            }, 500);
        };
        const changeState = async () => {
            const body = { status: isActive };
            try {
                const response = await axios.post(`/devices/${deviceIdx}/status`, body);
                lazyMutate();
            } catch (error) {
                alert('error');
            }
        };

        changeState();
    };

    return (
        <Card>
            <div className='tableContent'>
                <DummyCardEx height='500px'>
                    <Table
                        hasToggle
                        toggleId='idx'
                        toggleValueField='activate'
                        toggleHeader='에이전트 연결'
                        onToggleActivate={({ row }) => handleToggleActivate({ row }, true)}
                        onToggleInactivate={({ row }) => handleToggleActivate({ row }, false)}
                        defaultRowHeight='30'
                        defaultFontSize='14'
                        schema='simpleDevice'
                        browseData={tableData}
                        isTimestampFormattable
                        timestampHeader='update_time'
                        hasConfig
                        ConfigButtons={Configs}
                    />
                </DummyCardEx>
            </div>
        </Card>
    );
};

const Configs = ({ rowValues }) => {
    const { mutate } = useSWRConfig();
    const deviceIdx = rowValues.idx;

    const EditModal = () => {
        return <DeviceForm deviceIdx={deviceIdx} />;
    };

    const handleDelete = () => {
        const callback = () => {
            mutate(`/devices`);
        };
        remover(`/devices/${deviceIdx}`, null, callback);
    };

    return <ConfigButtons EditModal={EditModal} onDelete={handleDelete} />;
};

export default DeviceTable;
