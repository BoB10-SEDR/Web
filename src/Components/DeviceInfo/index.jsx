import '@Styles/ui.css';
import { useState } from 'react';
import { IoGrid } from 'react-icons/io5';
import { BsListUl } from 'react-icons/bs';

import { Row, Col } from '@Components/Grid';
import ButtonGroup from '@Components/ButtonGroup';
import SearchBar from '@Components/UI/SearchBar';
import Card from '@Components/Card';

const DeviceInfo = () => {
    const [viewType, setViewType] = useState('card');

    const buttons = [
        {
            children: <IoGrid />,
            backgroundColor: '#727cf5',
            onClick: () => {
                setViewType('card');
            },
        },
        {
            children: <BsListUl />,
            backgroundColor: '#727cf5',
            onClick: () => {
                setViewType('table');
            },
        },
    ];

    return (
        <div id='deviceInfo'>
            <div id='deviceHeader'>
                <ButtonGroup buttons={buttons} />
                <SearchBar />
            </div>
            <InfoView viewType={viewType} />
        </div>
    );
};

const InfoView = props => {
    const { viewType = 'card' } = props;

    return <Card>{viewType === 'table' ? <TableView /> : <CardView />}</Card>;
};

const CardView = () => {
    return <div id='cardView'>cardView</div>;
};

const TableView = () => {
    return <div id='tableView'>tableView</div>;
};

export default DeviceInfo;
