import '@Styles/magicianForm.css';
import { useState, useCallback, useMemo } from 'react';
import { observer } from 'mobx-react';
import axios from 'axios';
import { useSWRConfig } from 'swr';
import { useForm } from 'react-hook-form';
import Button from '@Components/UI/Button';
import store from '@Stores/logMagician';
import eventViewerStore from '@Stores/eventViewer';

const MonitoringForm = props => {
    const { file, isEdit } = props;
    const exampleReg = String.raw`(?<timestamp>^\w*\s*\d+\s+\d*:\d*:\d*) (?<device_name>\S*) (?<info>.*)`;
    const { idx, name, description, path, device_idx, pid, process_name, log_path, log_regex } = file;
    const [sampleLog, setSampleLog] = useState(
        'Dec  8 13:17:28 raspberrypi sudo: pam_unix(sudo:session): session closed for user pi'
    );
    const [regExp, setRegExp] = useState(log_regex);
    const [regError, setRegError] = useState('');
    const [isExampleClicked, setIsExampleClicked] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { error },
    } = useForm();

    const { mutate } = useSWRConfig();

    const onSubmit = data => {
        const activateMonitoringFile = async () => {
            const body = {
                device_idx,
                path: path ?? log_path,
                process_name,
                isActive: true,
                regex: regExp ?? '',
            };

            const { page, limit } = eventViewerStore;

            try {
                const response = axios.post(`/monitoring`, body);
                mutate(`/monitoring?page=${page}&limit=${limit}`);
                alert('success');
            } catch (error) {
                alert('error');
            }
        };

        activateMonitoringFile();
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

    const handleExampleClick = () => {
        setIsExampleClicked(!isExampleClicked);
    };

    return (
        <div className='form'>
            <div className='header'>
                <div className='name'>{path ?? log_path}</div>
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
                        <span className='description example' onClick={handleExampleClick}>
                            예시 보기
                        </span>
                        {isExampleClicked ? <div className='description'>{exampleReg}</div> : null}
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
                    <Button type='submit' className='applyButton'>
                        Apply
                    </Button>
                    {store.isLastTab() ? '' : <Button onClick={handleClick}>건너뛰기</Button>}
                </div>
            </form>
        </div>
    );
};

export default observer(MonitoringForm);
