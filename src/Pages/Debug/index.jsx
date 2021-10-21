import Card from '@Components/Card';
import { Row, Col } from '@Components/Grid';
import List from '@Components/List';
import Table from '@Components/Table';
import { Status } from '@Components/UI';

import '@Styles/debug.css';

const Debug = () => {
    const dummyItems = [
        { itemType: 'toggle', name: 'SQL Injection', desc: 'A, B, C, D에 적용 됨' },
        { itemType: 'toggle', name: '이러이러한 공격', desc: 'A, B, C, D에 적용 됨' },
        { itemType: 'toggle', name: '짧', desc: 'A, B, C, D에 적용 됨' },
        { itemType: 'toggle', name: '그 외 나머지', desc: 'A, B, C, D에 적용 됨' },
    ];

    return (
        <div id='debug' className='page'>
            {/* 작업 알아서 하시길 바랍니다 */}
            <Card title='안녕'>
                <Row>
                    <Col lg={3}>
                        <List title='공격 유형 별 로그 비율' titleFontColor='#F02632' content={dummyItems} />
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default Debug;
