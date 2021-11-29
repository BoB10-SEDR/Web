import '@Styles/logFormatter.css';
import { useState } from 'react';
import axios from 'axios';
import useSWR, { useSWRConfig } from 'swr';
import { observer } from 'mobx-react';
import { useForm } from 'react-hook-form';
import { Tabs } from 'react-tabs';
import { CustomTabList, CustomTab, CustomTabPanel } from '@Components/CustomTabs';
import Button from '@Components/UI/Button';
import store from '@Stores/logMagician';

const LogFormatter = () => {
    const handleSelect = index => {
        store.setActiveTab(index);
    };

    return (
        <div id='logFormatter'>
            <Tabs
                className='tabs'
                selectedIndex={store.activeTab}
                selectedTabClassName='active'
                onSelect={handleSelect}
            >
                <div className='tabList'>
                    <div className='header'>로그 포매터</div>
                    <CustomTabList>
                        {store.fdList.map((file, index) => {
                            return (
                                <CustomTab key={index} tabIndex={index}>
                                    <TabContent tabIndex={index} file={file} />
                                </CustomTab>
                            );
                        })}
                    </CustomTabList>
                </div>
                <div className='tabForm'>
                    {store.fdList.map((file, index) => {
                        return (
                            <CustomTabPanel key={index}>
                                <Form idx={file.idx} file={file} />
                            </CustomTabPanel>
                        );
                    })}
                </div>
            </Tabs>
        </div>
    );
};

const TabContent = props => {
    const { file } = props;
    const { idx, name, path, pid } = file;

    return (
        <div className='tabContent'>
            <div className='name'>{path}</div>
            <div className='category'>{`${idx} / ${name}`}</div>
        </div>
    );
};

const Form = props => {
    const { file, idx } = props;
    const { path, description } = file;
    const [sampleLog, setSampleLog] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { error },
    } = useForm();

    const { mutate } = useSWRConfig();

    const onSubmit = data => {
        const activateMonitorFile = async () => {
            try {
                const response = axios.post(`/monitoring/${idx}/activate`);
                mutate(`/monitoring`);
                alert('success');
            } catch (error) {
                alert('error');
                console.log(error);
            }
        };

        activateMonitorFile();
    };

    return (
        <div className='form'>
            <div className='header'>
                <div className='name'>{path}</div>
                <div className='description'>{description}</div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='sampleLog'>
                    <div className='title'>샘플 로그</div>
                </label>
                <input id='sampleLog' defaultValue={sampleLog} />
                <Button className='absolute'>Edit</Button>

                <label htmlFor='regFormat'>
                    <div className='title'>정규식</div>
                </label>
                <input id='regFormat' />
                <Button className='absolute'>Display</Button>
                <Button type='submit'>Apply</Button>
            </form>
            <Button>건너뛰기</Button>
        </div>
    );
};

export default observer(LogFormatter);
