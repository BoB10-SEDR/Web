import Card from '@Components/Card';
import { Row, Col } from '@Components/Grid';
import List from '@Components/List';
import Table from '@Components/Table';
import { Status } from '@Components/UI';

import '@Styles/debug.css';

const Debug = () => {
    const dummyItems = [
        { itemType: 'toggle', name: 'itemName', desc: 'description' },
        { itemType: 'toggle', name: 'itemName', desc: 'description' },
        { itemType: 'toggle', name: 'itemName', desc: 'description' },
        { itemType: 'toggle', name: 'itemName', desc: 'description' },
        { itemType: 'toggle', name: 'itemName', desc: 'description' },
    ];

    return (
        <div id='debug' className='page'>
            {/* 작업 알아서 하시길 바랍니다 */}
            <Card title='안녕'>
                <Row>
                    <Col lg={3}>
                        <List content={dummyItems} />
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default Debug;
