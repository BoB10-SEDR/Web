import '@Styles/ui.css';
import { useState } from 'react';
import { IconContext } from 'react-icons';
import { MdWidgets } from 'react-icons/md';
import { BsListUl } from 'react-icons/bs';

import { Row, Col } from '@Components/Grid';
import IconButton from '@Components/UI/IconButton';
import SearchBar from '@Components/UI/SearchBar';
import Card from '@Components/Card';

const DeviceInfo = () => {
    return (
        <div id='deviceInfo'>
            <Header />
            <Body />
        </div>
    );
};

const Header = () => {
    return (
        <div id='deviceHeader'>
            <div className='buttonList'>
                <IconContext.Provider value={{ className: 'reactIcons' }}>
                    <IconButton Icon={MdWidgets} />
                    <IconButton Icon={BsListUl} />
                </IconContext.Provider>
            </div>
            <SearchBar />
        </div>
    );
};

const Body = props => {
    const { viewType = 'card' } = props;

    return <Card>{viewType === 'table' ? <TableView /> : <CardView />}</Card>;
};

const CardView = () => {
    return null;
};

const TableView = () => {
    return null;
};

export default DeviceInfo;
