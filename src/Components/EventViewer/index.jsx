import { useState } from 'react';
import '@Styles/eventViewer.css';
import Table from '@Components/Table';
import logDummy from '@Dummy/logDetailDummy';
import CardHeader from '@Components/UI/CardHeader';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';

const EventViewer = props => {
    const { schema = 'eventViewer', data = [], defaultPadding = '1.25rem' } = props;
    const [row, setRow] = useState({ values: { id: 0 } });

    const handleRowClick = ({ row }) => {
        setRow(row);
    };

    const customStyle = {
        padding: defaultPadding,
    };

    return (
        <div className='eventViewer card'>
            <CardHeader title='이벤트뷰어' />
            <div className='eventViewerContentWrapper'>
                <SplitterLayout vertical={true} primaryMinSize={480} secondaryInitialSize={400}>
                    <div className='cardBody' style={customStyle}>
                        <Table
                            defaultFontSize='12'
                            defaultHeaderHeight='60'
                            defaultRowHeight='45'
                            schema={schema}
                            onRowClick={handleRowClick}
                            nowSelected={row.values.id}
                            browseData={data}
                        />
                    </div>
                    <LogDetail row={row} />
                </SplitterLayout>
            </div>
        </div>
    );
};

const LogDetail = props => {
    const { row } = props;
    // detail 데이터 불러오는 코드 필요
    const { parsedLog, original_log, description, ...detail } = row.values;

    return (
        <div className='logDetail'>
            <div className='logDetailContent'>
                <Header />
                <Body parsedLog={parsedLog} description={description} />
            </div>
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
    const { parsedLog, description } = props;
    return (
        <div className='detailBody'>
            {/* {Object.entries(parsedLog).map((entrie, key) => {
                return (
                    <div key={key} className='detailBox'>
                        <div className='head'>{entrie[0]}</div>
                        <div className='data'>{entrie[1]}</div>
                    </div>
                );
            })} */}
            {parsedLog}
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
