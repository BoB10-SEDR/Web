import useSWR from 'swr';
import { fetcher } from '@Hooks/';
import Table from '@Components/Table';

const FileList = props => {
    const { deviceIdx, pid } = props;
    const { data, error } = useSWR(`/monitoring/${deviceIdx}/process/${pid}/filedescriptor`, url => fetcher(url));

    if (!data) return <div>loading...</div>;

    return <Table isCheckable schema='files' browseData={data} defaultRowHeight='30' defaultFontSize='14' />;
};

export default FileList;
