import { useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { observer } from 'mobx-react';
import '@Styles/selector.css';
import store from '@Stores/logMagician';
import dummyFd from '@Dummy/fd';
import { fetcher } from '@Hooks';
import axios from 'axios';

const Selector = props => {
    const { data: fdData = dummyFd, error } = useSWR(`/monitoring/process`, url => fetcher(url), {
        refreshInterval: 60000,
    });
    const { mutate } = useSWRConfig();

    // const devices = store.deviceList;

    const handleClick = fd => {
        const { idx, name, path } = fd;
        const body = {
            path: path,
            process_name: name,
        };
        try {
            const response = axios.post(`/monitoring/147/activate`, body);
            mutate(`/devices/logs`);
            alert('success');
        } catch (e) {
            alert('error');
        }
    };

    if (!fdData) return <div className=''>loading...</div>;

    return (
        <div className='selector'>
            {fdData.map(device => {
                const { idx, name, process } = device;
                return process.map(item => {
                    const { name: processName, file_descriptor } = item;
                    return file_descriptor.map(fd => {
                        const { name, path } = fd;
                        return (
                            <Item
                                title={path}
                                description={`${name}, ${processName}`}
                                onClick={() => handleClick(fd)}
                            />
                        );
                    });
                });
            })}
        </div>
    );
};

const Item = props => {
    const { title, description, onClick = () => {} } = props;
    return (
        <div className='item' onClick={onClick}>
            <div className='title'>{title}</div>
            <div className='description'>{description}</div>
        </div>
    );
};

export default observer(Selector);
