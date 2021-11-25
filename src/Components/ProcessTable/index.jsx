import '@Styles/processTable.css';
import useSWR from 'swr';
import Table from '@Components/Table';
import { fetcher } from '@Hooks/';
import FileList from '@Components/FileList';

const ProcessTable = props => {
    const { deviceIdx } = props;
    const { data = [], error } = useSWR(`/monitoring/${deviceIdx}/process`, url => fetcher(url));

    const renderRowSubComponent = ({ row }) => {
        const { pid } = row.values;
        return <FileList deviceIdx={deviceIdx} pid={pid} />;
    };

    if (!data) return <div>loading...</div>;

    return (
        <div className='processTable'>
            <Table
                schema='process'
                browseData={data}
                isExpandable
                defaultRowHeight='30'
                defaultFontSize='14'
                renderRowSubComponent={renderRowSubComponent}
            />
        </div>
    );
};

export default ProcessTable;
