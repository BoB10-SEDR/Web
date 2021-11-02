import { useState, useEffect } from 'react';
import Card from '@Components/Card';
import Table from '@Components/Table';
import FilterButton from '@Components/FilterButton';
import SearchBar from '@Components/SearchBar';
import DummyCardEx from '@Dummy/DummyCardEx';
import { dummyColumns, dummyData } from '@Dummy/deviceTableDummy';

const DeviceTable = () => {
    const [columns, totalData] = [dummyColumns, dummyData];
    const [filteredData, setFilteredData] = useState(totalData);

    const handleSearch = input => {
        const filtered = totalData.filter(device => {
            return Object.keys(device).some(key => {
                return String(device[key]).toLowerCase().includes(input.toLowerCase());
            });
        });
        setFilteredData(filtered);
    };

    return (
        <div id='deviceTable'>
            <div className='tableUtils'>
                <FilterButton />
                <SearchBar onClick={handleSearch} />
            </div>
            <Card>
                <div className='tableContent'>
                    <DummyCardEx height='500px'>
                        <Table columns={columns} data={filteredData} />
                    </DummyCardEx>
                </div>
            </Card>
        </div>
    );
};

export default DeviceTable;
