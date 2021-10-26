import Card from '@Components/Card';
import { Row, Col } from '@Components/Grid';
import Table from '@Components/Table';
import '@Styles/debug.css';
import { useState } from 'react';

const Debug = () => {
    const [searchKeyword, setSearchKeyword] = useState('');

    return (
        <div id='debug' className='page'>
            <input type='text' value={searchKeyword} onChange={e => setSearchKeyword(p => e.target.value)} />
            <Card title='table'>
                <Table id='logTable' searchKeyword={searchKeyword} />
            </Card>
        </div>
    );
};

export default Debug;
