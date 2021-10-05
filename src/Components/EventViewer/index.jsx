import { useState } from 'react';
import Resizable from 'react-resizable-box';
import SplitPane from 'react-split-pane';
import '@Styles/eventViewer.css';
import Card from '@Components/Card';
import DummyCardEx from '@Dummy/DummyCardEx';
import Table from '@Components/Table';
import TableHeading from '@Components/Table/TableHeading';
import logDummy from '@Dummy/logDetailDummy';

const EventViewer = props => {
    const [rowId, setRowId] = useState(0);

    const handleRowClick = id => {
        setRowId(id);
    };

    return (
        <div className='eventViewer'>
            <Card>
                <DummyCardEx height='1000px'>
                    <TableHeading>
                        <span>이벤트 뷰어</span>
                    </TableHeading>
                    <Table onRowClick={handleRowClick} />
                    <LogDetail id={rowId} />
                </DummyCardEx>
            </Card>
        </div>
    );
};

const LogDetail = props => {
    const { id } = props;
    // detail 데이터 불러오는 코드 필요
    const { detail, description } = logDummy[id];
    const style = {
        position: 'absolute',
    };

    return (
        <Resizable className='logDetail' height='' minHeight='100' maxHeight='800' style={style}>
            <DragHandle />
            <div className='logDetailContent'>
                <Header />
                <Body detail={detail} description={description} />
            </div>
        </Resizable>
    );
};

const DragHandle = () => {
    return (
        <div className='dragHandleWrapper'>
            <div className='dragHandle'></div>
        </div>
    );
};

const Header = () => {
    return (
        <div className='detailHeader'>
            <span>Log Detail</span>
            <hr />
        </div>
    );
};

const Body = props => {
    const { detail, description } = props;
    return (
        <div className='detailBody'>
            {Object.entries(detail).map((entrie, key) => {
                return (
                    <div key={key} className='detailBox'>
                        <div className='head'>{entrie[0]}</div>
                        <div className='data'>{entrie[1]}</div>
                    </div>
                );
            })}
            <hr />
            <Description description={description} />
        </div>
    );
};

const Description = props => {
    const { description } = props;

    return (
        <div className='description'>
            <div className='head'>Description</div>
            <div className='data'>{description}</div>
        </div>
    );
};

export default EventViewer;
