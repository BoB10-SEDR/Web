import useSWR from 'swr';
import { useState, useEffect } from 'react';
import Card from '@Components/Card';
import Table from '@Components/Table';
import FilterButton from '@Components/FilterButton';
import AddDeviceButton from '@Components/AddDeviceButton';
import SearchBar from '@Components/SearchBar';
import DummyCardEx from '@Dummy/DummyCardEx';
import { dummyColumns, dummyData } from '@Dummy/deviceTableDummy';
import { fetcher } from '@Hooks/';

const DeviceTable = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const { data: devicesData = [], error } = useSWR(`/devices?page=${page}&limit=${limit}`, url => fetcher(url));
    const [filteredData, setFilteredData] = useState(devicesData);

    const handleSearch = input => {
        const filtered = devicesData.filter(device => {
            return Object.keys(device).some(key => {
                return String(device[key]).toLowerCase().includes(input.toLowerCase());
            });
        });
        setFilteredData(filtered);
    };

    useEffect(() => {
        setFilteredData(devicesData);
    }, [devicesData]);

    return (
        <div id='deviceTable'>
            <div className='tableUtils'>
                <FilterButton />
                <SearchBar onClick={handleSearch} />
                <AddDeviceButton />
            </div>
            <Card>
                <div className='tableContent'>
                    <DummyCardEx height='500px'>
                        <Table
                            defaultRowHeight='30'
                            defaultFontSize='14'
                            schema='simpleDevice'
                            browseData={filteredData}
                        />
                    </DummyCardEx>
                </div>
            </Card>
        </div>
    );
};

export default DeviceTable;
