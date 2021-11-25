import '@Styles/processTable.css';
import useSWR from 'swr';
import Table from '@Components/Table';
import { fetcher } from '@Hooks/';
import LogList from '@Components/LogList';

const ProcessTable = props => {
    const { deviceIdx } = props;
    const { data = [], error } = useSWR(`/monitoring/${deviceIdx}/process`, url => fetcher(url));

    const renderRowSubComponent = ({ row }) => {
        const { pid } = row.values;
        return <LogList deviceIdx={deviceIdx} pid={pid} />;
    };

    if (!data) return <div>loading...</div>;

    return (
        <div className='processTable'>
            <Table schema='process' browseData={data} isExpandable renderRowSubComponent={renderRowSubComponent} />
        </div>
    );
};

export default ProcessTable;
