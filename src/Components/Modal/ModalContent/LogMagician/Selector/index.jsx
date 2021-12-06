import { useState } from 'react';
import useSWR from 'swr';
import { observer } from 'mobx-react';
import Section from '@Components/Section';
import store from '@Stores/logMagician';
import { fetcher } from '@Hooks/';

const Selector = () => {
    const [deviceIndex, processIndex, fileIndex] = store.sectionIndexList;

    const handleSelect = (section, index) => {
        store.setSectionIndexList(section, index);
    };

    const handleSubmit = data => {
        store.setSelectedList([...data]);
        store.setIsSubmitted(false);
    };

    return (
        <div className='selector'>
            <DeviceSection
                title='장비'
                grid={4}
                onSelect={index => handleSelect(0, index)}
                selectedIndex={deviceIndex}
            />
            <ProcessSection
                title='프로세스'
                grid={4}
                onSelect={index => handleSelect(1, index)}
                selectedIndex={processIndex}
            />
            <FileSection
                title='파일'
                grid={4}
                onSelect={index => handleSelect(2, index)}
                selectedIndex={fileIndex}
                isLast
                isSubmitted={store.isSubmitted}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

const DeviceSection = props => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const { data = [], error } = useSWR(`/devices?page=${page}&limit=${limit}`, url => fetcher(url));

    if (!data) return <div>loading...</div>;

    const deviceNameList = data.map(item => {
        return item.name;
    });

    return <Section data={deviceNameList} {...props} />;
};

const ProcessSection = props => {
    const { deviceIndex, ...rest } = props;
    const { data = [], error } = useSWR(`/monitoring/${deviceIndex}/process`, url => fetcher(url));

    if (!data) return <div>loading...</div>;

    const processNameList = data.map(item => {
        return item.name;
    });

    return <Section data={processNameList} {...rest} />;
};

const FileSection = props => {
    const { deviceIndex, pid, ...rest } = props;
    const { data = [], error } = useSWR(`/monitoring/${deviceIndex}/process/${pid}/filedescriptor`, url =>
        fetcher(url)
    );

    if (!data) return <div>loading...</div>;

    const filePathList = data.map(item => {
        return item.path;
    });

    return <Section data={filePathList} {...rest} />;
};

export default observer(Selector);
