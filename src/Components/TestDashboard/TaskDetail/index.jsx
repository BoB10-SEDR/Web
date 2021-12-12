import { useMemo, useEffect, useState } from 'react';
import { DummyCircle } from '@Dummy/DummyComponents';
import ProgressBar from '@Components/ProgressBar';
import TaskInformation from './TaskInformation';
import { formatTimestamp } from '@Functions/';

const TaskDetail = props => {
    const { item = {} } = props;
    const [currentLevel, setCurrentLevel] = useState(0);
    const { name: title, timestamp: rawTimestamp, process_info: steps = [], detail = [] } = item;

    const timestamp = useMemo(() => formatTimestamp(rawTimestamp), [rawTimestamp]);

    useEffect(() => {
        for (let i = 0; i < steps.length; i++) {
            const { status } = steps[i];
            if (status === 'IN PROGRESS') {
                setCurrentLevel(i);
                return;
            }
        }
    }, [steps]);

    return (
        <>
            <Header title={title} timestamp={timestamp} />
            <ProgressBar steps={steps} level={currentLevel} />
            <TaskInformation detail={detail[currentLevel]} />
            {/* 적용 가능한 정책 list => 새로운 form */}
        </>
    );
};

const Header = props => {
    const { title = '테스트 이름', timestamp = 'YYYY년 MM월 DD일 오전 HH:MM:SS' } = props;

    const dummyCircleSize = '45px';

    return (
        <div className='taskDetailHeader'>
            <div className='taskDetailInfoWrapper'>
                <span className='title'>{title}</span>
                <span className='time'>{timestamp}</span>
            </div>
            <div className='functions'>
                <DummyCircle color='red' size={dummyCircleSize} style={{ marginRight: '40px' }} />
                <DummyCircle color='gray' size={dummyCircleSize} style={{ marginRight: '20px' }} />
                <DummyCircle color='gray' size={dummyCircleSize} />
            </div>
        </div>
    );
};

export default TaskDetail;
