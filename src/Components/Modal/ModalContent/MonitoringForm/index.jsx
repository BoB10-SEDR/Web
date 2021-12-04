import { useState, useCallback, useMemo } from 'react';
import axios from 'axios';
import { useSWRConfig } from 'swr';
import { useForm } from 'react-hook-form';
import Button from '@Components/UI/Button';
import store from '@Stores/logMagician';

const MonitoringForm = props => {
    const exampleReg = String.raw`(?<ip>.*?) (?<remote_log_name>.*?) (?<userid>.*?) \[(?<date>.*?)(?= ) (?<timezone>.*?)\] "(?<request_method>.*?) (?<path>.*?)(?<request_version> HTTP\/.*)?" (?<status>.*?) (?<length>.*?) "(?<referrer>.*?)" "(?<user_agent>.*?)" (?<session_id>.*?) (?<generation_time_micro>.*?) (?<virtual_host>.*)`;
    const { file, idx, description } = props;
    const { path, device_idx, pid } = file;
    const [sampleLog, setSampleLog] = useState('');
    const [regExp, setRegExp] = useState(new RegExp(exampleReg));
    const [regError, setRegError] = useState('');
    const {
        register,
        handleSubmit,
        formState: { error },
    } = useForm();

    const { mutate } = useSWRConfig();

    const onSubmit = data => {
        const activateMonitoringFile = async () => {
            try {
                const response = axios.post(`/monitoring/${idx}/activate`);
                alert('success');
            } catch (error) {
                alert('error');
                console.log(error);
            }
        };

        const addMonitoringFile = async () => {
            const body = {
                device_idx: device_idx,
                process_idx: pid,
                file_descriptor_idx: idx,
            };

            try {
                const response = axios.post(`/monitoring`, body);
                mutate('/monitoring');
            } catch (error) {
                console.log(error);
            }
        };

        activateMonitoringFile();
        addMonitoringFile();
        store.setNextTab();
    };

    const handleSampleLogChange = useCallback(event => {
        setSampleLog(event.target.value);
    }, []);

    const handleRegFormatChange = useCallback(event => {
        setRegExp(event.target.value);
    }, []);

    const matchRegExp = () => {
        try {
            const reg = new RegExp(regExp);
            const result = reg.exec(sampleLog);

            if (!result.groups) {
                setRegError('그룹을 지정하지 않았습니다.');
                return;
            }
            setRegError('');
            return result.groups;
        } catch (error) {
            if (error.name === 'TypeError') {
                setRegError('');
                return;
            }
            setRegError('정규식이 올바르지 않습니다.');
        }
    };

    const regResult = useMemo(() => matchRegExp(), [sampleLog, regExp]);

    const handleClick = () => {
        store.setNextTab();
    };

    return (
        <div className='form'>
            <div className='header'>
                <div className='name'>{path}</div>
                <div className='description'>{description}</div>
            </div>

            <form className='form' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                <div className='inputBox'>
                    <label htmlFor='sampleLog'>
                        <div className='title'>샘플 로그</div>
                    </label>
                    <input id='sampleLog' value={sampleLog} onChange={handleSampleLogChange} />
                </div>

                <div className='inputBox'>
                    <label htmlFor='regFormat'>
                        <div className='title'>정규식</div>
                        <div className='description'>그룹화 패턴을 사용해 필드를 지정해주세요</div>
                        <input id='regFormat' value={regExp} onChange={handleRegFormatChange} />
                        <div className='error'>{regError}</div>
                    </label>
                </div>

                <div className='result'>
                    <pre>
                        <code>{JSON.stringify(regResult, null, 2)}</code>
                    </pre>
                </div>

                <div className='buttons'>
                    <Button type='submit' className='submitButton'>
                        Apply
                    </Button>
                    {store.isLastTab() ? '' : <Button onClick={handleClick}>건너뛰기</Button>}
                </div>
            </form>
        </div>
    );
};

export default MonitoringForm;