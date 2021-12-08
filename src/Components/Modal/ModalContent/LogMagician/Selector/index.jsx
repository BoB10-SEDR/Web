import { useState } from 'react';
import useSWR from 'swr';
import { observer } from 'mobx-react';
import Section from '@Components/Section';
import store from '@Stores/logMagician';
import { fetcher } from '@Hooks/';

const Selector = () => {
    const [firstIndex, midIndex, lastIndex] = store.sectionIndexList;

    const handleSelect = (section, index, item, callback = () => {}) => {
        store.setSectionIndexList(section, index);
        callback(item);
    };

    const handleSubmit = data => {
        store.setFdList([...data]);
        store.setIsSubmitted(false);
    };

    const setSelectedDevice = item => {
        store.setSelectedDeviceIndex(item.idx);
    };

    const setSelectedProcess = item => {
        const { pid, name } = item;
        store.setSelectedProcessIndex(pid);
        store.setSelectedProcessName(name);
    };

    return (
        <div className='selector'>
            <DeviceSection
                title='장비'
                grid={4}
                onSelect={(index, item) => handleSelect(0, index, item, setSelectedDevice)}
                selectedIndex={firstIndex}
            />
            <ProcessSection
                title='프로세스'
                grid={4}
                onSelect={(index, item) => handleSelect(1, index, item, setSelectedProcess)}
                selectedIndex={midIndex}
                deviceIndex={store.selectedDeviceIndex}
            />
            <FileSection
                title='파일'
                grid={4}
                onSelect={(index, item) => handleSelect(2, index, item)}
                selectedIndex={lastIndex}
                isLast
                isSubmitted={store.isSubmitted}
                onSubmit={handleSubmit}
                deviceIndex={store.selectedDeviceIndex}
                pid={store.selectedProcessIndex}
                processName={store.selectedProcessName}
            />
        </div>
    );
};

const DeviceSection = props => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(50);
    const { data = [], error } = useSWR(`/devices?page=${page}&limit=${limit}`, url => fetcher(url), {
        refreshInterval: 60000,
    });

    if (!data) return <div>loading...</div>;

    return <Section data={data} {...props} />;
};

const ProcessSection = props => {
    const { deviceIndex, ...rest } = props;
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(50);

    const { data = [], error } = useSWR(
        deviceIndex ? `/monitoring/${deviceIndex}/process?page=${page}&limit=${limit}` : null,
        url => fetcher(url),
        { refreshInterval: 60000 }
    );

    if (!data) return <div>loading...</div>;

    return <Section data={data} {...rest} />;
};

const FileSection = props => {
    const { deviceIndex, pid, processName, ...rest } = props;
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(50);
    const { data = [], error } = useSWR(
        deviceIndex && pid
            ? `/monitoring/${deviceIndex}/process/${pid}/filedescriptor?page=${page}&limit=${limit}`
            : null,
        url => fetcher(url),
        { refreshInterval: 60000 }
    );

    if (!data) return <div>loading...</div>;

    const filePathList = data.map(item => {
        const { idx, path, name, ...rest } = item;
        return { deviceIndex, idx, name: path, path, processName, ...rest };
    });

    console.log(data);
    console.log(filePathList);
    return <Section data={filePathList} {...rest} />;
};

export default observer(Selector);
