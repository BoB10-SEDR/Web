import '@Styles/logFormatter.css';
import { useState, useCallback, useMemo } from 'react';
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
                            const { idx, name } = file;
                            return (
                                <CustomTab key={index} tabIndex={index}>
                                    <TabContent tabIndex={index} file={file} description={`${idx} / ${name}`} />
                                </CustomTab>
                            );
                        })}
                    </CustomTabList>
                </div>
                <div className='tabForm'>
                    {store.fdList.map((file, index) => {
                        const { idx, name } = file;
                        return (
                            <CustomTabPanel key={index}>
                                <Form idx={file.idx} file={file} description={`${idx} / ${name}`} />
                            </CustomTabPanel>
                        );
                    })}
                </div>
            </Tabs>
        </div>
    );
};

const TabContent = props => {
    const { file, description } = props;
    const { idx, name, path, pid } = file;

    return (
        <div className='tabContent'>
            <div className='name'>{path}</div>
            <div className='category'>{description}</div>
        </div>
    );
};

const Form = props => {
    const { file, idx, description } = props;
    const { path } = file;
    const [sampleLog, setSampleLog] = useState('');
    const [regExp, setRegExp] = useState(new RegExp(''));
    const [result, setResult] = useState('');

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

    const handleSampleLogChange = useCallback(event => {
        setSampleLog(event.target.value);
    }, []);

    const handleRegFormatChange = useCallback(event => {
        setRegExp(event.target.value);
    }, []);

    const matchRegExp = () => {
        const reg = new RegExp(regExp);
        const result = sampleLog.match(reg);
        setResult(result);
        console.log(reg, result);
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
                <input id='sampleLog' value={sampleLog} onChange={handleSampleLogChange} />

                <label htmlFor='regFormat'>
                    <div className='title'>정규식</div>
                </label>

                <div className='textInput'>
                    <input id='regFormat' defaultValue={regExp} onChange={handleRegFormatChange} />
                    <Button className='absolute' onClick={matchRegExp}>
                        display
                    </Button>
                </div>

                <div className='result'>{result}</div>
                <Button type='submit'>Apply</Button>
            </form>
            <Button>건너뛰기</Button>
        </div>
    );
};

export default observer(LogFormatter);